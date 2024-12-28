export default async function getVans() {
  const response = await fetch("/api/vans");

  if (!response.ok) {
    throw {
      message: "Faild to fetch vans",
      statusText: response.statusText,
      status: response.status,
    };
  }

  const vansData = await response.json();
  return vansData.vans;
}
