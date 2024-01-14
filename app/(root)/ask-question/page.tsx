import Question from "@/components/forms/Question";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  // const { userId } = auth();
  const userId = "CL123456";

  if (!userId) redirect("/sign-in");

  const mongoUser = await getUserById({ userId });

  console.log(mongoUser);

  return (
    <div className="">
      <h1 className="h1-bold text-dark100_light900 mb-8">Ask a question</h1>
      <Question mongoUserId={JSON.stringify(mongoUser._id)} />
    </div>
  );
};

export default page;
