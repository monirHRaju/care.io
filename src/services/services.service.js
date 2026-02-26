"use server"
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

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/services?${getParams}`,
        {
            cache: "force-cache", // default : no-store
        }
    )

    const data = await res.services.json()
    console.log(data)
    return data;

}