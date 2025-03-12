export default async function DiseasePrediction({ params }) {
    const { user } = await params;
    return <div>Disease Prediction: {user}</div>;
  }
  