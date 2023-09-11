import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";
import { POST_PER_PAGE } from "@/utils/data";

export const GET = async (request: NextRequest) => {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') as string);

    try {
        const [posts, count] = await prisma.$transaction([prisma.post.findMany(
            { take: POST_PER_PAGE, skip: POST_PER_PAGE * (page - 1) }
        ), prisma.post.count()]);
        
        return new NextResponse(JSON.stringify({ posts, count }), { status: 200 })
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({ message: 'Some error' }), { status: 500 })
    }
}