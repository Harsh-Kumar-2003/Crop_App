export default function Profile({ params }) {
  const { user } = params;
  return <div>Profile: {user}</div>;
}
