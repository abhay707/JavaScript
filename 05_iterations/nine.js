const myNums = [1, 2, 3]

const total = myNums.reduce((acc, currval) =>{
    // console.log(`acc: ${acc} amd current value ${currval}`);
    return acc+currval 
},0)

// console.log(total);

const shopping_cart = [
    {
        itemName: "JS course",
        price: 399
    },
    {
        itemName: "python",
        price: 299
    },
    {
        itemName: "DSA",
        price: 1299
    },
    {
        itemName: "DevOps",
        price: 1499
    }
]

const TotalPrice = shopping_cart.reduce((acc, item)=> {return item.price + acc}, 0)
console.log(TotalPrice);