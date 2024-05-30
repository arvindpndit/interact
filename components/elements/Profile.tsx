"use client";

import React, { useEffect, useState } from "react";
import InteractionCard from "./InteractionCard";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

const Profile = ({ userClerkId }) => {
  const [userData, setUserData] = useState(null);
  const [showFollowBtn, setShowFollowBtn] = useState(null);
  const { isSignedIn, user } = useUser();

  const handleFollowBtn = () => {
    if (isSignedIn && userData) {
      console.log("user is signned in is " + user.id);

      const isFollower = userData?.follower.some(
        (follower) => follower.follower.clerkId == user.id
      );
      console.log(isFollower);
      setShowFollowBtn(isFollower);
    }

    //handle if user is not following
  };

  const fetchData = async () => {
    try {
      const response = await getData(userClerkId);
      console.log(response);
      setUserData(response?.data?.user);
      console.log(userData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userClerkId]);

  useEffect(() => {
    handleFollowBtn();
  }, [userData, isSignedIn, user]);

  return (
    <div className="flex justify-center bg-white ">
      <div className="w-full">
        <div className="px-12">
          <div className="flex py-4 items-center">
            <Link
              href={"/"}
              className="hover:bg-gray-200 p-2 rounded-full text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M20 11H7.41l5.3-5.29a1 1 0 1 0-1.42-1.42l-7 7a1 1 0 0 0 0 1.42l7 7a1 1 0 0 0 1.42-1.42L7.41 13H20a1 1 0 0 0 0-2z" />
              </svg>
            </Link>

            <div className="ml-8">
              <p className="font-bold">{userData?.name} </p>
              <p>{userData?.interactions?.length} Interactions</p>
            </div>
          </div>
          <div>
            <img
              className="rounded-3xl"
              src="https://i.pinimg.com/736x/93/4f/c2/934fc23b8db01e0113a8512fb6311d8f.jpg"
            />
          </div>
          <div className="flex justify-between">
            <div className="rounded-full border-4 border-white inline-block -mt-16 w-32 ml-3">
              <img className="w-32 rounded-full" src={userData?.picture} />
            </div>

            <div>
              <button
                onClick={handleFollowBtn}
                className="rounded-full px-3 py-2 mt-3 mr-7 transition hover:bg-blue-50 inline-block border-2 border-blue-400 text-blue-400 font-bold"
              >
                {showFollowBtn ? "Following" : "Follow"}
              </button>
            </div>
          </div>
          <div className="ml-3">
            <p className="font-bold text-lg">{userData?.name}</p>
            <p className="text-gray-500">@{userData?.name}</p>
          </div>
          <div className="px-3 mt-3 flex">
            <p className="cursor-pointer hover:underline">
              <span className="font-bold">{userData?.follower.length}</span>{" "}
              Followers
            </p>
            <p className="ml-5 cursor-pointer hover:underline">
              <span className="font-bold">{userData?.following.length}</span>{" "}
              Following
            </p>
          </div>
          <div className="flex gap-3 mt-3 border-b pb-2">
            <div className="px-5 rounded-3xl bg-blue-50  hover:bg-blue-100 justify-center  text-blue-400 py-3 cursor-pointer transition">
              <p className="text-center font-bold">Interactions</p>
            </div>
            <div className="px-5 rounded-3xl bg-blue-50  hover:bg-blue-100 justify-center  text-blue-400 py-3 cursor-pointer transition">
              <p className="text-center font-bold">Replies</p>
            </div>
            <div className="px-5 rounded-3xl bg-blue-50  hover:bg-blue-100 justify-center  text-blue-400 py-3 cursor-pointer transition">
              <p className="text-center font-bold">Likes</p>
            </div>
          </div>

          <div className=" p-2">
            <p className="text-sm font-bold  text-gray-500">
              <i className="fas fa-thumbtack"></i>

              <span className="">Pinned Interactions</span>
            </p>
          </div>
        </div>
        <div>
          {userData?.interactions.map((interaction) => (
            <InteractionCard key={interaction.id} interaction={interaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;

export async function getData(clerkId) {
  const graphqlEndpoint = "https://interact-server.onrender.com/graphql";

  try {
    const response = await fetch(graphqlEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `      
          query User($clerkId: String) {
            user(clerkId: $clerkId) {
              username
              picture
              name
              interactions {
                id
                content
                author {
                  name
                  clerkId
                  name
                  picture
                  username  
                }
              }
              follower {
                follower {
                  name
                  email
                  clerkId
                }
              }
              following {
                followee {
                  email
                  name
                  clerkId
                }
              }
            }
          }
        `,
        variables: { clerkId: clerkId },
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
