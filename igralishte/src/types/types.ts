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

export type BrandType = string[];

export interface DataType {
    vintageClothes: ProductType[];
    accessories: ProductType[];
    brands: BrandType;
}