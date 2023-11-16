import { createServerResponse } from "@/lib/create-server-response";
import { db } from "@/lib/db";
import getCurrentUser from "@/app/actions/get-current-user";
import { packageSchema } from "@/lib/validations/package";

// GET
export async function GET(request: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return createServerResponse({
        message: "Unauthorized",
        status: 400,
      });
    }

    return createServerResponse({
      body: {
        bookings: user.bookings,
      },
      message: "Bookings fetched successfully",
      status: 200,
    });
  } catch (error) {
    return createServerResponse({
      message: "Something went wrong",
      status: 500,
    });
  }
}

// POST
export async function POST(request: Request) {
  try {
    const { packageId, people, noOfDays, bookingDate } = await request.json();

    const { success } = packageSchema.safeParse({
      packageId,
      people,
      noOfDays,
      bookingDate,
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
      },
    });

    // console.log(packageId, people, noOfDays, bookingDate);
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
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return createServerResponse({
        message: "Booking id is required",
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

    // delete a booking
    const deletedBooking = await db.bookings.delete({
      where: {
        id,
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
