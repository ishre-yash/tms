"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SigninForm from "./signin-form";
import { useSession } from "next-auth/react";
import React from "react";
import { useRouter } from "next/navigation";
import LoadingPage from "@/components/loading-page";
import SignupForm from "./signup-form";

export default function Home() {
  const { status } = useSession();
  const router = useRouter();
  React.useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  if (status === "unauthenticated") {
    return (
      <main className="flex flex-col items-center justify-center pt-10 ">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          TSM
        </h1>
        <Tabs defaultValue="signin" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <SigninForm />
          </TabsContent>
          <TabsContent value="signup">
            <SignupForm />
          </TabsContent>
        </Tabs>
      </main>
    );
  } else {
    return <LoadingPage />;
  }
}
