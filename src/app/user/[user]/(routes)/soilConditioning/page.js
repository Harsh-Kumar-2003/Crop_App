export default async function SoilConditioning({ params }) {
  const { user } = await params;
  return <div>Soil Conditioning: {user}</div>;
}
