import { dbConnect } from "@/lib/dbConnect";


export async function GET(request, {params}){
    const {slug} = params;

    // if(id.length != 24){
    //     return Response.json(
    //     {
    //         message : "Invalid ID",
    //     },
    //     { status : 400}
    // )
    // }
    const serviceRes = await dbConnect("services")
    const service = await serviceRes.findOne({slug: slug})

    return Response.json({
        service,
        message : "service retrieved successfully"
    })
}