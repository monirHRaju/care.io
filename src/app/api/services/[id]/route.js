import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

const servicesRes = await dbConnect("services");

export async function GET(request, { params }) {
  const { id } = await params;

  if (id.length != 24) {
    return Response.json(
      {
        message: "Invalid service ID",
      },
      { status: 400 }
    );
  }

  const service = await servicesRes.findOne({ _id: new ObjectId(id) });
  return Response.json({
    service,
    message: "Single service retrieved successfully!",
  });
}

// checked above codes

export async function PATCH(request, { params }) {
  const { id } = await params;
  const data = await request.json();

  if (id.length != 24) {
    return Response.json(
      {
        message: "Invalid service ID",
      },
      { status: 400 }
    );
  }

  const filter = { _id: new ObjectId(id) };
  const updateDoc = {
    $set: data,
  };

  const service = await servicesRes.updateOne(filter, updateDoc);
  return Response.json({
    service,
    message: "Service updated successfully!",
  });
}


export async function DELETE(request, { params }) {
  const { id } = await params;
  const data = await request.json();

  if (id.length != 24) {
    return Response.json(
      {
        message: "Invalid service ID",
      },
      { status: 400 }
    );
  }

  const filter = { _id: new ObjectId(id) };

  const service = await servicesRes.deleteOne(filter);
  return Response.json({
    service,
    message: "Service deleted successfully!",
  });
}
