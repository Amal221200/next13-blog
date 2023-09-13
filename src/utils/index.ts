const BASE_URL: string = process.env.NEXT_DOMAIN as string
export const capitalizeWord = (word: string): string => `${word[0].toUpperCase()}${word.slice(1)}`;

export const getCategories = async (): Promise<CategoryType[]> => {
    const res: Response = await fetch(`${BASE_URL}/api/categories`, {
        cache: 'no-store'
    })

    if (!res.ok) {
        throw new Error("Failed to fetch categories");
    }

    return await res.json();
}

export const getPost = async (slug: string): Promise<PostType> => {
    const res: Response = await fetch(`${BASE_URL}/api/posts/${slug}`, {
        cache: 'no-store'
    })
    
    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }

    return await res.json();
}

export const getPosts = async (page: number, category?: string): Promise<{ posts: PostType[], count: number }> => {
    const res: Response = await fetch(`${BASE_URL}/api/posts?page=${page}&category=${category || ""}`, {
        cache: 'no-store'
    })
    
    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }

    return await res.json();
}
