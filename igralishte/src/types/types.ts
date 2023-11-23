export interface DataType {
    products: {
        vintageClothes: VintageClothesType;
        accessories: AccessoriesType;
    }
    brands: BrandType[];
    about: AboutType;
    FAQ: FAQType[];
    contact: ContactType;
    gifts: GiftType[];
    box: BoxComponentType[];
}

export interface VintageClothesType {
        tops: ProductType[];
        pants: ProductType[];
        bottomsShorts: ProductType[];
        dresses: ProductType[];
        coatsAndJackets: ProductType[];
        underwear: ProductType[];
}

export interface AccessoriesType {
        purses: ProductType[];
        jewelry: ProductType[];
}


export interface ProductType {
    id: string,
    category: string,
    subcategory: string,
    title: string,
    img: string,
    price: number,
    brand: string,
    model_size: string,
    color: string,
    material: string,
    composition: string,
    condition: string,
    care_instructions: string,
    in_stock: boolean,
    discount: number,
    description: string,
    date: string,
    amount: number,
    selected: boolean
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
    id: number;
    title: string;
    img: string;
    first_content: string;
    second_content: string;
}
