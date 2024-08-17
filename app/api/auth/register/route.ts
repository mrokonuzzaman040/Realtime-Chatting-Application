import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/mongoose";
import User, { IUser } from "@/models/User";

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const { name, username, email, password, dateOfBirth, ipAddress } =
      await req.json();

    // Validate that all required fields are provided
    if (
      !name ||
      !username ||
      !email ||
      !password ||
      !dateOfBirth ||
      !ipAddress
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a verification code
    const verificationCode = Math.random().toString(36).substring(2, 15);

    // Create a new user
    const newUser: IUser = new User({
      name,
      username,
      email,
      password: hashedPassword,
      dateOfBirth: new Date(dateOfBirth),
      ipAddress,
      verificationCode,
      isVerified: false,
    });

    await newUser.save();

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
