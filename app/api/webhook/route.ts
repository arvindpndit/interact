import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Get the ID and type
  const { id } = evt.data;
  const eventType = evt.type;

  console.log(`Webhook with and ID of ${id} and type of ${eventType}`);
  console.log("Webhook body:", body);

  const GRAPHQL_ENDPOINT_URL = process.env.GRAPHQL_ENDPOINT_URL;

  if (eventType === "user.created") {
    const graphqlEndpoint = GRAPHQL_ENDPOINT_URL;
    const { id, email_addresses, image_url, username, first_name, last_name } =
      evt.data;

    try {
      const response = await fetch(graphqlEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
            mutation {
              createUser(username: "${username}", email: "${
            email_addresses[0].email_address
          }", clerkId: "${id}", picture:"${image_url}" , name:"${first_name}${
            last_name ? ` ${last_name}` : ""
          }") {
                id
                username
                email
              }
            }
          `,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create user via GraphQL");
      }

      const responseData = await response.json();
      console.log("User created via GraphQL:", responseData);
      return new Response("OK", { status: 200 });
    } catch (error) {
      console.error("Error creating user via GraphQL:", error);
      return new Response("Error occured", { status: 500 });
    }
  }

  if (eventType === "user.updated") {
    return new Response("OK", { status: 200 });
  }
  if (eventType === "user.deleted") {
    return new Response("OK", { status: 200 });
  }

  return new Response("", { status: 200 });
}
