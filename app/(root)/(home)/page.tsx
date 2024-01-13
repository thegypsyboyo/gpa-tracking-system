import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <SignedIn>
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-10 w-10",
            },
            variables: {
              colorPrimary: "#ff7000",
            },
          }}
        />
      </SignedIn>
    </div>
  );
};

export default Home;
