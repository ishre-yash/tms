import { createServerResponse } from "@/lib/create-server-response";
import { db } from "@/lib/db";

// POST
export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, message } = await request.json();

    // validate the user input

    if (!firstName || !lastName || !email || !message) {
      return createServerResponse({
        message: "Please fill in all fields",
        status: 400,
      });
    }

    // create a new booking
    const data = await db.contact.create({
      data: {
        firstName,
        lastName,
        email,
        message,
      },
    });

    return createServerResponse({
      body: data,
      message: "Booking created successfully",
      status: 200,
    });
  } catch (error) {
    return createServerResponse({
      message: "Something went wrong",
      status: 500,
    });
  }
}
