export default async function Notifications({ params }) {
  const { user } = await params;
  return <div>Notifications: {user}</div>;
}
