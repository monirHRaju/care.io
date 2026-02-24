export async function GET(request) {
    const data = {
        message: "Hello from the API route!"
    };
    return Response.json(data);
}