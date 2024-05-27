"use client";
import Profile from "@/components/elements/Profile";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params = useParams();

  return (
    <div>
      <Profile userClerkId={params.id} />
    </div>
  );
};

export default Page;
