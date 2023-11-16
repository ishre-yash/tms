import { db } from "@/lib/db";
import getSession from "./get-session";

const getCurrentUser = async () => {
  try {
    const session = await getSession();

    if (!session?.user?.id) {
      return null;
    }

    const currentUser = db.user.findFirst({
      where: {
        id: session.user.id,
      },
      include: {
        bookings: true,
      },
    });

    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error: any) {
    return null;
  }
};

export default getCurrentUser;
