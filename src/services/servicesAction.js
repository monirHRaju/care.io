"use server";
export const getAllServices = async (searchParams) => {
  const params = new URLSearchParams(searchParams).toString();
  console.log('Fetching with params:', params);

  const res = await fetch(
    `http://localhost:3000/api/services?${params}`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    console.error('Fetch error:', res.status);
    return { data: [], meta: { total: 0 } };
  }

  const data = await res.json();
  return data;
};

export const getSingleServices = async (id) => {
  const res = await fetch(`http://localhost:3000/api/services/${id}`, {
    cache: "no-store", // or use revalidate if needed
  });
  await new Promise((resolve) => 
            setTimeout(() => {
                resolve()
            }), 1000
        )
  const data = await res.json();
  return data?.data || null;
}