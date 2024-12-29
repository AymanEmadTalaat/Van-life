export default async function getVans(id) {
  const response = await fetch(`/api/vans${id ? `/${id}` : ""}`);

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

export async function getHostVans(id) {
  const response = await fetch(`/api/host/vans${id ? `/${id}` : ""}`);

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

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
