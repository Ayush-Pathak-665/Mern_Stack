let arr = [1,2,3,4,5];
let ar = arr.map((i)=>i*2);
console.log(ar)


console.log(ar.filter((i)=> i>5))
console.log(ar)

let sum = 0;

// for(let i = 0;i<ar.length;i++){
//     if(ar[i]%2==0){
//         ar[i] = ar[i]*3;
//         sum+=ar[i];
//     }
// }
// console.log(ar)
// console.log(sum)

let tripleEvenNumber = (ar)=>{
   return ar.filter((i)=>i%2===0).map((i)=>i*3).reduce((i,sum)=>{
        sum = sum + i
        return sum
    })
}

console.log(tripleEvenNumber(ar))




const orders = [
  { orderId: 1, item: "Laptop", price: 1000, status: "pending" },
  { orderId: 2, item: "Mouse", price: 25, status: "delivered" },
  { orderId: 3, item: "Keyboard", price: 75, status: "delivered" },
  { orderId: 4, item: "Monitor", price: 200, status: "cancelled" },
  { orderId: 5, item: "Headphones", price: 100, status: "delivered" }
];

// You should only count orders that have been "delivered" (ignore cancelled or pending orders).

// For the delivered items, the store charged a $5 shipping fee per item that isn't included in the
//  base price. You need to add this to each item's price.

// You need to calculate the final total sum of all those updated prices.

let choose = (orders) =>{
    return orders.filter(orders=>orders.status==="delivered").map(orders=>orders.price+5).reduce((sum,current)=>sum+current);
}

console.log(choose(orders))
