export default async function PestManagement({ params }) {
  const { user } = await params;
  return <div>Pest Management: {user}</div>;
}
