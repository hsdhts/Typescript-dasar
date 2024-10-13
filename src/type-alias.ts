export type ID = string | number ;

export interface Category {
    id : number, 
    name : string,
    address? : string
}

export type Product = {
    id : ID,
    name : string,
    price : number,
    category : Category,
    description?: string
}
