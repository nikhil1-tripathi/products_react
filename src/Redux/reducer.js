import { PRODUCTS_DATA, PRODUCTS_FAILURE, PRODUCTS_REQ, PRODUCTS_SORT, PRODUCTS_SUCCESS } from "./actionTypes";


const initState = {
    products:[],
    isLoading:false,
    isError:false
}

export const Reducer = (store = initState ,{type,payload})=>{
    switch (type) {
        case PRODUCTS_REQ:
            return{...store , isLoading:true}
        case PRODUCTS_SUCCESS:
            
            return{...store , isLoading:false, products:payload} 
        case PRODUCTS_FAILURE:
            return {...store , isError: true}
        case PRODUCTS_DATA:
            let product = store.products.filter((ele)=>{
              return(
                  ele.id == payload
              )
            })
            console.log(product)
            return {...store ,products:product }
        case PRODUCTS_SORT:
            let sorted_data;
            console.log(payload)
            if(payload === "asc"){
                sorted_data =  store.products.sort((a,b) => {
                    return(
                        a.price-b.price
                    )
    
                });
            } if(payload === "desc") {
                sorted_data =  store.products.sort((a,b) => {
                    return(
                        b.price-a.price
                    )
    
                });
            }
            
            // sorted_data =  store.products.sort((a,b) => {
            //     return(
            //         a.price-b.price
            //     )

            // });
            console.log(sorted_data)
            return {...store , products : sorted_data}

        default:
            return store
    }

}