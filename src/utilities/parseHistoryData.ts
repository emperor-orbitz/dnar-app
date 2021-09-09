export function parseHistoryData(data:any){

    if(data == null) return {}
    return { 
    country_origin: data.country_origin,
    hashing_algorithm: data.hashing_algorithm,
    total_supply: '$' + data.market_data.total_supply,
    max_supply: '$'+ data.market_data.max_supply,
    circulating_supply: '$' + data.market_data.circulating_supply,
    categories:data.categories
    }
}


 