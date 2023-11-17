export interface ProductType {
  id: string;
    type: string;
    product_type: string;
    title: string;
    img: string;
    price: number;
    brand: string;
    model_size: string;
    colour: string;
    material: string;
    composition: string;
    condition: string;
    care_instructions: string;
    in_stock: boolean;
    description: string;
    date: string;
  };
  
  export interface VintageClothes {
    tops: ProductType[],
    pants: ProductType[],
    bottomsShorts: ProductType[],
    dresses: ProductType[],
    coatsAndJackets: ProductType[],
    underwear: ProductType[],
    // vintageClothes: ProductType[]
  }

export interface AccessoriesType {
    id: string;
    type: string;
    product_type: string;
    title: string;
    img: string;
    price: number;
    brand: string;
    model_size: string;
    colour: string;
    material: string;
    composition: string;
    condition: string;
    care_instructions: string;
    in_stock: boolean;
    description: string;
    date: string;
}

export interface Accessories {
  purses: AccessoriesType,
  jewelry: AccessoriesType
}

export interface BrandType {
  id: string,
  name: string
}
export interface DataType {
  vintageClothes: VintageClothes[],
  accessories: Accessories[],
  brands: BrandType[],
  lifestyle: string,
  giftCard: string,
  discount: string,
  about: AboutType,
  FAQ: FAQType[],
  contact: ContactType
}

export interface AboutType {
    title: string,
    image1:  string,
    image2:  string,
    first_content: string,
    second_content: string,
}

export interface ContactType {
  title: string,
  image: string,
  content: string,
  address: string,
  city: string,
  phone: string,
  workingHours: string
}

export interface FAQType {
  id: number,
  question: string,
  answer: string
}



