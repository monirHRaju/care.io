"use server"
export const createService = async (data) => {
  const res = await fetch(
    `${process.env.NEXT_AUTH_URL || "http://localhost:3000"}/api/services`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to create service");
  }

    // revalidatePath("/services");
//   revalidateTag("services");

  return res.json();
};


export const getSingleService = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/services/${id}`,
        // {cache: "no-store"}
        {
            next: {
                revalidate: 60,
            }
        }
    );
    console.log(data)
    return res.service.json()
}

export const getAllServices = async (searchParams) => {
    const getParams =  new URLSearchParams(searchParams).toString();
    console.log(getParams);

    const res = await fetch(
        `
        ${process.env.NEXT_PUBLIC_BASE_URL

         }/api/services?${getParams}`,
        {
            cache: "force-cache", // default : no-store
            next: {
                tags: "services",
                revalidate: 60,
            },
        },
    )

    const data = await res.json()
    console.log(data)
    return data;

}