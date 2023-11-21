export interface DataType {
    categories: CategoryType[];
    brands: BrandType[];
    about: AboutType;
    FAQ: FAQType[];
    contact: ContactType;
    gifts: GiftType[];
    box: BoxComponentType[];
}

export interface CategoryType {
    subcategories: SubcategoryType[];
}

export interface SubcategoryType {
    products: ProductType[];
}

export interface ProductType {
    id: string;
    name: string;
    category: string;
    subcategory: string;
    title: string;
    img: string;
    price: number;
    brand: string;
    sizes: string;
    color: string;
    material: string;
    discount: number;
    composition: string;
    condition: string;
    care_instructions: string;
    in_stock: boolean;
    description: string;
    date: string;
}


export interface BrandType {
    id: string;
    name: string;
    img: string;
    description: string;
}

export interface AboutType {
    title: string;
    image1: string;
    image2: string;
    first_content: string;
    second_content: string;
 }

export interface FAQType {
    id: string;
    question: string;
    answer: string;
}

export interface ContactType {
    title: string;
    image: string;
    content: string;
    address: string;
    city: string;
    phone: string;
    workingHours: string;
}

export interface GiftType {
    img: string;
    title: string;
}

export interface BoxComponentType {
    title: string;
    img: string;
    first_content: string;
    second_content: string;
}
