import { db } from "@/lib/db";
import getSession from "./get-session";

const getMyBookings = async () => {
  try {
    const session = await getSession();

    if (!session?.user?.id) {
      return null;
    }

    const myBookings = db.user.findFirst({
      where: {
        id: session.user.id,
      },
      include: {
        bookings: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!myBookings) {
      return null;
    }

    return myBookings;
  } catch (error: any) {
    return null;
  }
};

export default getMyBookings;
