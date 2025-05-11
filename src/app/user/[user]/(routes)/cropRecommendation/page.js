import CropRecommendationForm from "@/components/forms/CropRecommendationForm";

export default async function CropRecommendation({ params }) {
  const { user } = await params;
  return (
    <div>
      <CropRecommendationForm user={user} />
    </div>
  );
}
