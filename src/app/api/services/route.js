// app/api/services/route.js
// import connectMongoDB from '@/lib/mongodb';
// import Service from '@/models/Service';

import { dbConnect } from "@/lib/dbConnect";


export async function GET() {
  // await connectMongoDB();
  const servicesRes = await dbConnect("services");
  const services = await servicesRes.find({}).toArray();

  return Response.json({
    message: "Services fetched successfully",
    services
   });
}

export async function POST(request) {
  await connectMongoDB();
  const data = await request.json();
  const newService = await Service.create(data);
  return Response.json({ message: 'Service created', service: newService }, { status: 201 });
}