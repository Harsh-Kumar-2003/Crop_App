import { Schema, model, models } from "mongoose";

const ProfileSchema = new Schema(
  {
    uuid: {
      type: String,
      required: true,
      unique: true,
    },
    latitude: {
      type: String,
      required: false,
    },
    longitude: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    farmSize: {
      type: Number,
      required: true,
      min: [0, "Farm size must be a positive number"],
    },
    soilType: {
      type: String,
      required: true,
      enum: [
        "Alluvial Soil",
        "Black Soil",
        "Red Soil",
        "Laterite Soil",
        "Mountain/Forest Soil",
        "Desert Soil",
        "Saline Soil",
        "Peaty Soil",
        "Sandy Soil",
        "Sub-Montane Soil",
      ],
    },
    agroClimaticZone: {
      type: String,
      required: false, // Optional; set to true if mandatory
    },
  },
  { timestamps: true }
);

const Profile = models?.Profile || model("Profile", ProfileSchema);

export default Profile;
