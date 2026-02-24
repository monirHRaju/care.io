import { dbConnect } from "@/lib/dbConnect";

export async function GET() {
  // await connectMongoDB();
  const bookingsRes = await dbConnect("bookings");
  const bookings = await bookingsRes.find({}).toArray();

  return Response.json({
    message: "bookings fetched successfully",
    bookings
   });
}
