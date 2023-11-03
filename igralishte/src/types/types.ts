export interface BannerType {
    preTitle: string,
    title: string
}

export interface ProductType {
    id: string,
    price: string,
    title: string,
    gender: ProductGenderType,
    img: string,
    description: string
}

export type ProductGenderType = 'man' | 'women';

export interface BlogType {
    id: string,
    author: string,
    date: string,
    category: ProductBlogType,
    excerpt: string,
    img: string,
    title: string,
    first_content: string,
    second_content: string
}

export type ProductBlogType = 'streetstyle' | 'fashion' | 'beauty' | 'lifestyle' | 'diy';


export interface AboutType {
    title: string,
    first_content:  string,
    second_content: string,
    third_content: string,
    first_image: string,
    second_image: string,
    second_title: string,
    fourth_content: string,
    fifth_content: string,
    author: string,
}