
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
    searchParams: { page: string, category: string }
}

interface BlogPageProps extends HomePageProps {

}

interface CardListProps {
    page: number,
    category?: string
}
interface PaginationProps {
    page: number,
    hasNext: boolean,
    hasPrev: boolean,
}

interface CommentsProps {
    comments: CommentType[]
}

interface CommentProps {
    comment: CommentType
}
interface SingleCommentProps {
    comment: SingleCommentType
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
    body: string,
    img?: string,
    views: number,
    catSlug: string,
    userEmail: string,
    createdAt: string,
}

interface SinglePostType extends PostType {
    user: UserType,
    comments: CommentType[]
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
    createdAt: string,
    desc: string,
    userEmail: string,
    postSlug: string,
    user?: UserType
}

interface SingleCommentType extends CommentType{
    user: UserType
}