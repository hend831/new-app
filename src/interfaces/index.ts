export interface Iproduct {
    id?:string |undefined,
    title: string,
    description:string,
    imageUrl:string,
    price:string,
    colors:string[],
    category:{
        name:string,
        imageUrl:string
    }

}