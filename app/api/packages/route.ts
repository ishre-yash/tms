import { createServerResponse } from "@/lib/create-server-response";
import { db } from "@/lib/db";
import getCurrentUser from "@/app/actions/get-current-user";
import { packageSchema } from "@/lib/validations/package";
import { NextRequest } from "next/server";

// POST
export async function POST(request: Request) {
  try {
    const { packageId, people, noOfDays, bookingDate, amount } =
      await request.json();

    const { success } = packageSchema.safeParse({
      packageId,
      people,
      noOfDays,
      bookingDate,
      amount,
    });

    if (!success) {
      return createServerResponse({
        message: "Invalid Request Body",
        status: 400,
      });
    }

    const user = await getCurrentUser();
    if (!user) {
      return createServerResponse({
        message: "Unauthorized",
        status: 400,
      });
    }

    // create a new booking
    const newBooking = await db.bookings.create({
      data: {
        packageId,
        userId: user.id,
        people,
        noOfDays,
        bookingDate,
        amount,
      },
    });

    return createServerResponse({
      body: newBooking,
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

// DELETE
export async function DELETE(request: NextRequest) {
  try {
    const bookingId = parseInt(
      request.nextUrl.searchParams.get("bookingId") || "0"
    );

    console.log(bookingId);

    const user = await getCurrentUser();
    if (!user) {
      return createServerResponse({
        message: "Unauthorized",
        status: 400,
      });
    }

    // delete the booking
    const deletedBooking = await db.bookings.delete({
      where: {
        id: bookingId,
      },
    });

    return createServerResponse({
      body: deletedBooking,
      message: "Booking deleted successfully",
      status: 200,
    });
  } catch (error) {
    return createServerResponse({
      message: "Something went wrong",
      status: 500,
    });
  }
}
