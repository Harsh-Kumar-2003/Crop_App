"use server";

import { NextResponse } from "next/server";
import mongoose from "mongoose";
import User from "@/models/User";
const uri = process.env.MONGODB_URI; // Your MongoDB connection string

export async function GET(req) {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(uri);
  }
  const url = new URL(req.url);
  const email = url.searchParams.get("email");
  console.log("Email from query:", email);

  const reqUser = await User.findOne({ email: email });
  if (!reqUser) {
    return NextResponse.json({ status: "400", statusText: "User not found" });
  }
  if (!reqUser.uuid) {
    return NextResponse.json({
      status: "400",
      statusText: "User email does not have a uuid",
    });
  }
  const uuid = await reqUser.uuid;
  return NextResponse.json({ uuid: uuid });
  //return NextResponse.json({ key: "GET" });
}

// export async function POST(req) {
//   return NextResponse.json("POST request");
// }
