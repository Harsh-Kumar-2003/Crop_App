"use server";

import { NextResponse } from "next/server";
import mongoose, { get } from "mongoose";
import Profile from "@/models/Profile";
import { getAgroClimaticZone } from "@/actions/AgroClimaticZone";
const uri = process.env.MONGODB_URI; // Your MongoDB connection string

export async function POST(req) {
  await mongoose.connect(uri);
  const url = new URL(req.url);
  const uuid = url.searchParams.get("uuid");
  const profileData = (await Profile.findOne({ uuid: uuid })) || {};
  if (profileData.length > 0) {
    return NextResponse.json(
      { message: "Profile already exists" },
      { status: 400 }
    );
  }

  const body = await req.json();
  const { latitude, longitude } = body;
  const agroClimaticZone = await getAgroClimaticZone(latitude, longitude);
  console.log("agroClimaticZone", agroClimaticZone);
  if (!agroClimaticZone) {
    body.agroClimaticZone = "Unknown";
  } else {
    body.agroClimaticZone = agroClimaticZone.properties.acr_name;
  }
  const profile = new Profile(body);
  console.log("post api call", body);
  await profile.save();
  return NextResponse.json({ status: 201 });
}

export async function PUT(req) {
  await mongoose.connect(uri);
  const url = new URL(req.url);
  const uuid = url.searchParams.get("uuid");
  const body = await req.json();

  const { latitude, longitude } = body;
  const agroClimaticZone = await getAgroClimaticZone(latitude, longitude);
  console.log("agroClimaticZone", agroClimaticZone);
  if (!agroClimaticZone) {
    body.agroClimaticZone = "Unknown";
  } else {
    body.agroClimaticZone = agroClimaticZone.properties.acr_name;
    console.log("put api call", body);
  }

  const profile = await Profile.findOneAndUpdate({ uuid: uuid }, body, {
    new: true,
  });
  if (!uuid) {
    return NextResponse.json({ message: "UUID is required" }, { status: 400 });
  }
  if (!profile) {
    return NextResponse.json({ message: "Profile not found" }, { status: 404 });
  }
  return NextResponse.json({ status: 200 });
}
