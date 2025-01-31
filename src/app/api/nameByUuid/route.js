"use server";

import { NextResponse } from "next/server";
import mongoose from "mongoose";
import User from "@/models/User";
import bcrypt from "bcryptjs";

const uri = process.env.MONGODB_URI; // Your MongoDB connection string
export async function GET(req) {
  await mongoose.connect(uri);
  const url = new URL(req.url);
  const uuid = url.searchParams.get("uuid");
  const users = await User.findOne({ uuid: uuid });
  if (!users) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  return NextResponse.json(users.name);
}

export async function PUT(req) {
  await mongoose.connect(uri);

  const url = new URL(req.url);
  const uuid = url.searchParams.get("uuid");
  const { name, password } = await req.json();

  if (!uuid || !name || !password) {
    return NextResponse.json(
      { message: "UUID, name, and password are required" },
      { status: 400 }
    );
  }

  try {
    const user = await User.findOne({ uuid });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      // Replace with proper password hashing in production
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 401 }
      );
    }

    const updatedProfile = await User.findOneAndUpdate(
      { uuid },
      { $set: { name } },
      { new: true }
    );

    return NextResponse.json({
      message: "Name updated successfully",
      profile: updatedProfile,
    });
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
