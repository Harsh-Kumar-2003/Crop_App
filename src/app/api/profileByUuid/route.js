"use server";

import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Profile from "@/models/Profile";
const uri = process.env.MONGODB_URI; // Your MongoDB connection string

export async function GET(req) {
  await mongoose.connect(uri);
  const url = new URL(req.url);
  const uuid = url.searchParams.get("uuid");
  const profileData = (await Profile.findOne({ uuid: uuid })) || {};

  return NextResponse.json(profileData);
}
