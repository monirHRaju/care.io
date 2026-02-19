// app/api/services/route.js
import connectMongoDB from '@/lib/mongodb';
import Service from '@/models/Service';

export async function GET() {
  await connectMongoDB();
  const services = await Service.find({});
  return Response.json({ services });
}

export async function POST(request) {
  await connectMongoDB();
  const data = await request.json();
  const newService = await Service.create(data);
  return Response.json({ message: 'Service created', service: newService }, { status: 201 });
}