export default function Result() {
  const data = JSON.parse(localStorage.getItem("crop_result"));
  console.log(data);
  return <div> {data}</div>;
}
