export default async function CropRecommendation({ params }) {
  const { user } = await params;
  return <div>Crop Recommendation: {user}</div>;
}
