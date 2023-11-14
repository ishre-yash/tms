"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupForm() {
  const { toast } = useToast();
  const router = useRouter();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      name: name,
      email: email,
      password: password,
    };
    await axios
      .post("/api/auth/signup", data)
      .then((res) => {
        if (res.status === 200) {
          signIn("credentials", {
            email,
            password,
            redirect: false,
          }).then((callback) => {
            if (callback?.error === "Invalid credentials") {
              setIsLoading(false);
              return toast({
                title: callback.error,
                description: "Please try again.",
                variant: "destructive",
              });
            } else {
              setIsLoading(false);
              router.push("/dashboard");
              return toast({
                title: "Account created successfully!",
                description: "Redirecting to dashboard...",
              });
            }
          });
        }
      })
      .catch((err) => {
        toast({
          title: err.response.data.message,
          description: "Please try again.",
          variant: "destructive",
        });
        setIsLoading(false);
      });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Create a new account to get started.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleSubmit}
          disabled={
            !password ||
            !email ||
            password.length < 4 ||
            !email.includes("@") ||
            !email.includes(".")
          }
        >
          {isLoading ? (
            <>
              <svg
                className="mr-2 h-5 w-5 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8Z"
                />
              </svg>
            </>
          ) : (
            "Sign Up"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
