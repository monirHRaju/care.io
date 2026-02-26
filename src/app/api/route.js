export async function GET(request) {
    const data = {
        message: "Hello from the API route!"
    };
    return Response.json(data);
}
export async function POST(request) {
  const newService = await request.json();
  const serviceResponse = await dbConnect("reviews");
  const res = await serviceResponse.insertOne(newService);
  return Response.json({
    message: "Service added successfully!",
    review: res,
  });
}
