"use client";

import React, { useEffect, useState } from "react";
import InteractionCard from "../elements/InteractionCard";

const InteractionContainer = () => {
  const [interactionData, setInteractionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData();
        setInteractionData(response?.data?.interactions || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [interactionData]);

  return (
    <>
      {interactionData &&
        interactionData.map((interaction) => (
          <InteractionCard key={interaction.id} interaction={interaction} />
        ))}
    </>
  );
};

export default InteractionContainer;

export async function getData() {
  const graphqlEndpoint = "https://interact-server.onrender.com/graphql";

  try {
    const response = await fetch(graphqlEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `      
          query Interactions {
            interactions {
              content
              id
              author {
                name
                clerkId
                name
                picture
                username  
              }
            }
          }  
        `,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create interaction via GraphQL");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating interaction via GraphQL:", error);
    return new Response("Error occured", { status: 500 });
  }
}
