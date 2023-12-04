export interface DataType {
    products: ProductType[],
    brands: BrandType[];
    about: AboutType;
    FAQ: FAQType[];
    contact: ContactType;
    gifts: GiftType[];
    box: BoxComponentType[];
}

export interface ProductType {
    id: string,
    category: string,
    subcategory: string,
    title: string,
    img: string,
    img1: string,
    img2: string,
    img3: string,
    price: number,
    brand: ProductBrandType,
    brand_name: string,
    model_size: string,
    size_description: string,
    color: ProductColorType,
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

// export type ProductSubcategoryType = 'red' | 'orange'| 'yellow' | 'green' | 'blue' | 'pink' | 'purple' | 'grey' | 'white' | 'black' ;

// export type ProductPriceType = 'red' | 'orange'| 'yellow' | 'green' | 'blue' | 'pink' | 'purple' | 'grey' | 'white' | 'black' ;

// export type ProductSizeType = 'red' | 'orange'| 'yellow' | 'green' | 'blue' | 'pink' | 'purple' | 'grey' | 'white' | 'black' ;


export type ProductColorType = 'red' | 'orange'| 'yellow' | 'green' | 'blue' | 'pink' | 'purple' | 'grey' | 'white' | 'black' ;

export type ProductBrandType = 'zsDaNe' | 'factoryGirl'| 'mainDays' | 'nezno' | 'red' | 'nas' | 'pincPartywear' | 'fraeil' | 'urma' | 'candleNest' | 'beyondGreen' |'gatta' ;



export interface BrandType {
    id: string;
    name: string;
    brand: string;
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
