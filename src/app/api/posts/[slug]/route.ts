import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/connect";

export const GET = async (request: NextRequest, { params }: { params: { slug: string } }) => {

    const { slug } = params;

    try {

        const post = await prisma.post.findUnique({
            where: {
                slug
            },
            include: {
                user: {},
                comments: {
                    include:{
                        user: {}
                    }
                }
            }
        });

        return NextResponse.json(post, {
            status: 200
        });
    } catch (error) {
        console.log(error);

        return NextResponse.json({ message: 'Some error happened' }, {
            status: 500
        });
    }
}