export interface CoinI {
        id:string,
        symbol:string,
        name: string,
        image:string,
        current_price: number,
        high_24h: number,
        low_24h: number,
}

export interface LeaderI{
        id?:string,
        name:string,
        symbol:string,
        image?:string
        price_change_percentage_24h:number
        current_price:number
    
}