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


export interface SubCategory {
  type: string;
  products: ProductType[];
}

export interface Category {
  category: string;
  subs: SubCategory[];
}

export interface DataType {
  category: Category,
  subs: SubCategory[]
}
// export interface DataType {
//   items: Category[];
// }


// export interface MenuType {
//   categoryName: MenuCategory;
//   subsMenu: SubCategory[]
// }
// export interface MenuCategory {
//   menuType: string;
//   menuSubs: MenuSubsCategory[]
// }

// export interface MenuSubsCategory {
//   menuSubsType: string;
//   menuSubsProduct: ProductType[]
// }