import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";
import { POST_PER_PAGE } from "@/utils/constants";

export const GET = async (request: NextRequest) => {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') as string) || 1;
    const category = searchParams.get('category')

    const postQuery = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
        where: {
            ...(category && { catSlug: category })
        }
    }
    try {
        const [posts, count] = await prisma.$transaction([prisma.post.findMany(
            postQuery
        ), prisma.post.count({
            where: postQuery.where
        })]);

        return new NextResponse(JSON.stringify({ posts, count }), { status: 200 })
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({ message: 'Some error' }), { status: 500 })
    }
}