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
      items: [1,2,3]
    },
    {
      sku: 17605827,
      warranty: 'lifetime',
      items: [11,2,3]

    },
    {
      sku: 17605421,
      warranty: 'lifetime',
      items: [11,23,3]
    },
    {
      sku: 30122459,
      warranty: 3,
      items: [113,2,3]
    },
    {
      sku: 30047575,
      warranty: 'lifetime',
    }
  ];

  console.log(PRODUCTS)    

  const findSKU = (sku) => {
    
    for (let i = 0; i < PRODUCTS.length; i++) {

         const product = PRODUCTS[i].sku; 
         console.log(product)
         for (let i = 0; i < ITEMS_WITH_WARRANTY.length; i++) {
             const item = ITEMS_WITH_WARRANTY[i].sku;
             console.log(item)
             if(product === item){
                 
                return {...PRODUCTS[i], ...ITEMS_WITH_WARRANTY[i]}
            }  
            }
     /*    console.log(product)
        if(product === sku){
            return PRODUCTS[i].currency
        } */
      
    }
  }
  console.log(findSKU(17605421))

const getLiftimeWarranty =  ITEMS_WITH_WARRANTY.filter(x => x.warranty === 'lifetime')
const getLiftimeWarrantyMap =  ITEMS_WITH_WARRANTY.map(x => x)


console.log(getLiftimeWarrantyMap)