// export interface ProductType {
//   id: string;
//     type: string;
//     product_type: string;
//     title: string;
//     img: string;
//     price: number;
//     brand: string;
//     model_size: string;
//     colour: string;
//     material: string;
//     composition: string;
//     condition: string;
//     care_instructions: string;
//     in_stock: boolean;
//     description: string;
//     date: string;
//   };
  
//   export interface VintageClothes {
//     tops: ProductType[],
//     pants: ProductType[],
//     bottomsShorts: ProductType[],
//     dresses: ProductType[],
//     coatsAndJackets: ProductType[],
//     underwear: ProductType[],
//   }

// export interface AccessoriesType {
//     id: string;
//     type: string;
//     product_type: string;
//     title: string;
//     img: string;
//     price: number;
//     brand: string;
//     model_size: string;
//     colour: string;
//     material: string;
//     composition: string;
//     condition: string;
//     care_instructions: string;
//     in_stock: boolean;
//     description: string;
//     date: string;
// }

// export interface Accessories {
//   purses: AccessoriesType,
//   jewelry: AccessoriesType
// }

// export interface BrandType {
//   id: string,
//   name: string
// }

// export interface AboutType {
//     title: string,
//     image1:  string,
//     image2:  string,
//     first_content: string,
//     second_content: string,
// }

// export interface ContactType {
//   title: string,
//   image: string,
//   content: string,
//   address: string,
//   city: string,
//   phone: string,
//   workingHours: string
// }

// export interface FAQType {
//   id: number,
//   question: string,
//   answer: string
// }

// export interface GiftType {
//   img: string,
//   title: string
// }


// export interface DataType {
//   vintageClothes: VintageClothes[],
//   accessories: Accessories[],
//   brands: BrandType[],
//   lifestyle: string,
//   discount: string,
//   about: AboutType,
//   FAQ: FAQType[],
//   contact: ContactType,
//   gifts: GiftType[]
// }

// export interface DataProductType {
//   vintageClothes: VintageClothes[],
//   accessories: Accessories[],
//   brands: BrandType[]
// }

export interface DataType {
 categories: CategoryType[];
 brands: BrandType[];
 about: AboutType;
 FAQ: FAQType[];
 contact: ContactType;
 gifts: GiftType[];
 pages: PageType[];
}

export interface CategoryType {
//  id: string;
 name: string;
 subcategories: SubcategoryType[];
}

export interface SubcategoryType {
//  id: string;
 name: string;
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
 sizes: string[];
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

export interface PageType {
 page: number;
}

