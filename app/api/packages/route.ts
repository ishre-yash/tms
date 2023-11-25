import { createServerResponse } from "@/lib/create-server-response";
import { db } from "@/lib/db";
import getCurrentUser from "@/app/actions/get-current-user";
import { packageSchema } from "@/lib/validations/package";

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
