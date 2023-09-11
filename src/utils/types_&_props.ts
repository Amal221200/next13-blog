interface ThemeContextType {
    theme: string,
    toggleTheme: () => void
}

interface BaseFCProps {
    children: React.ReactNode
}

interface ServerComponentsProps {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

interface HomePageProps extends ServerComponentsProps {
    searchParams: { page: string | undefined }

}

interface CardList {
    page: number
}
interface Pagination {
    page: number
}

interface CategoryType {
    title: string,
    id: string,
    img?: string,
    slug: string,
    posts?: PostType[]
}

interface PostType {
    id: string,
    slug: string,
    title: string,
    desc: string,
    img?: string,
    views: number,
    catSlug: string,
    userEmail: string,
    createdAt: string
}

interface UserType {
    id: string,
    name?: string,
    email: string,
    emailVerified?: string,
    image?: string,
    Comment: CommentType[],
    Post: PostType[]
}

interface CommentType {
    id: string,
    views: number,
    userEmail: string,
    postSlug: string,
    createdAt: string
}