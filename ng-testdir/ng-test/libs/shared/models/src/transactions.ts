export interface ITransaction {
    id?:string;
    name: string;
    fromUser: string
    toUser: string; 
    description: string;
    price: number;
}