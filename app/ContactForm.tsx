"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import React from "react";

export default function ContactForm() {
  const { toast } = useToast();

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, message }),
    });

    const { error } = await res.json();

    if (error) {
      toast({
        title: "Error",
        description: "Please try again.",
        variant: "destructive",
      });
      return;
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="p-4 py-6 rounded-lg bg-gray-50 md:p-8">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="md:items-center md:flex gap-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">Your message</Label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
