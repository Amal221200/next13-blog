export const POST_PER_PAGE = 2

interface categoryLists {
    [key: string]: string,
    style: string,
    fashion: string,
    food: string,
    travel: string,
    culture: string,
    coding: string,
}

interface LinkType {
    text: string,
    href: string
}

interface FooterLinkType {
    name: string,
    links: LinkType[]
}

export const categoryMenuBg: categoryLists = {
    style: "#57c4ff31",
    fashion: "#ff7887",
    food: "#7fb881",
    travel: "#ff7857",
    culture: "#ffb14f",
    coding: "#775aec",
}

export const categoryListBg: categoryLists = {
    style: '#57c4ff31',
    fashion: '#da85c731',
    food: '#7fb88133',
    travel: '#ff795736',
    culture: '#ffb04f45',
    coding: '#5e4fff31',
}

export const FooterLinks: FooterLinkType[] = [
    {
        name: 'Links',
        links: [
            { text: 'Homepage', href: "/" },
            { text: 'Blog', href: "/blog" },
            { text: 'About', href: "/about" },
            { text: 'Contact', href: "/contact" }
        ]
    },
    {
        name: 'Tags',
        links: [
            { text: 'Style', href: "/?category=style" },
            { text: 'Fashion', href: "/?category=fashion" },
            { text: 'Coding', href: "/?category=coding" },
            { text: 'Travel', href: "/?category=travel" }
        ]
    },
    {
        name: 'Social',
        links: [
            { text: 'Facebook', href: "/" },
            { text: 'Instagram', href: "/" },
            { text: 'Tiktok', href: "/" },
            { text: 'Youtube', href: "/" }
        ]
    }
]