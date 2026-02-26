// app/api/services/route.js
// import connectMongoDB from '@/lib/mongodb';
// import Service from '@/models/Service';

import { dbConnect } from "@/lib/dbConnect";


export async function GET(request) {
  // await connectMongoDB();
  const servicesRes = await dbConnect("services");
  const services = await servicesRes.find({}).toArray();

  return Response.json({
    services,
    message: "Services retrieved successfully",
   });
}

export async function POST(request) {
  
  const newService = await request.json();
  const serviceRes = await dbConnect("services")
  const res = await serviceRes.insertOne(newService)
  return Response.json(
  { 
    message: 'Service created', 
    service: res, 
  }, 
  { status: 201 }
);
}