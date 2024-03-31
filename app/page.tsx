"use client";
import React from "react";
import { RegisterSample } from "@/data/actions/register";

import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

function HomePage() {
  const session = useSession();
  console.log(session, "session");
  const user = async () => {
    await RegisterSample().then((cb) => {
      console.log(cb);
      return;
    });
  };
  if (!session) {
    return <div className="">not user found</div>;
  }
  return (
    <div>
      <Button onClick={user}>Click here</Button>
      {session && <p>{session.data?.user?.email}</p>}
    </div>
  );
}

export default HomePage;
