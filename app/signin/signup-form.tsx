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

    // Validation
    if (name.length < 4) {
      return toast({
        title: "Name must be at least 4 characters long.",
        variant: "destructive",
      });
    }

    const nameRegex = /^[a-zA-Z ]+$/;
    if (!nameRegex.test(name)) {
      return toast({
        title: "Name must not contain any special characters or numbers.",
        variant: "destructive",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return toast({
        title: "Invalid email address.",
        variant: "destructive",
      });
    }

    if (password.length < 8) {
      return toast({
        title: "Password must be at least 8 characters long.",
        variant: "destructive",
      });
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
    if (!passwordRegex.test(password)) {
      return toast({
        title:
          "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character.",
        variant: "destructive",
      });
    }

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
            required
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
            required
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit} disabled={isLoading}>
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
