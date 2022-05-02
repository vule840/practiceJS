/* Array of objects manipulation */

let PRODUCTS = [
    {
      sku: 16901348,
      warranty: 1,
      onsale: false,
      currency: [ "USD","CH","EUR", "JUN"]
    },
    {
      sku: 17605827,
      warranty: 'lifetime',
      onsale: true,
      currency: [ "USD","EUR", "JUN"]  
    },
    {
      sku: 17605421,
      warranty: 'lifetime',
      onsale: false,
      currency: [ "USD","CH","EUR"]
    }
  ];

  let ITEMS_WITH_WARRANTY = [
    {
      sku: 16901348,
      warranty: 1,
    },
    {
      sku: 17605827,
      warranty: 'lifetime',
    },
    {
      sku: 17605421,
      warranty: 'lifetime',
    },
    {
      sku: 30122459,
      warranty: 3,
    },
    {
      sku: 30047575,
      warranty: 'lifetime',
    }
  ];

  console.log(PRODUCTS)    

  const findSKU = (sku) => {
    
    for (let i = 0; i < PRODUCTS.length; i++) {

         const single = PRODUCTS[i].sku; 
        console.log(single)
        if(single === sku){
            return PRODUCTS[i].currency
        }
      
    }
  }
  console.log(findSKU(17605421))

const getLiftimeWarranty =  ITEMS_WITH_WARRANTY.filter(x => x.warranty === 'lifetime')
console.log(getLiftimeWarranty)