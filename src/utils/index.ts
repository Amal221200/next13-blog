// import axios from "axios";
const BASE_URL: string = 'http://localhost:3000'
export const capitalizeWord = (word: string): string => `${word[0].toUpperCase()}${word.slice(1)}`;

export const getCategories = async (): Promise<CategoryType[]> => {
    // const data = await axios({ method: 'get', url: `http://localhost:3000/api/categories` })
    // console.log(data)
    const res: Response = await fetch(`${BASE_URL}/api/categories`, {
        cache: 'no-store'
    })

    if (!res.ok) {
        throw new Error("Failed to fetch categories");
    }

    return await res.json();
}
