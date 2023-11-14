import { userSignUpSchema } from "@/lib/validations/auth";
import { createServerResponse } from "@/lib/create-server-response";
import { db } from "@/lib/db";
import bcrypt from "bcrypt";

// POST /api/auth/signup 🟢
export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    const { success } = userSignUpSchema.safeParse({
      name,
      email,
      password,
    });

    if (!success) {
      return createServerResponse({
        message: "Invalid Request Body",
        status: 400,
      });
    }

    const userExist = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (userExist) {
      return createServerResponse({
        message: "User already exists",
        status: 400,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    if (!user) {
      return createServerResponse({
        message: "User creation failed",
        status: 500,
      });
    }

    return createServerResponse({
      message: "User created successfully",
      status: 200,
      body: {
        user,
      },
    });
  } catch (error) {
    return createServerResponse({
      message: "Something went wrong",
      status: 500,
    });
  }
}
