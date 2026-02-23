const mongoose  = require('mongoose');
const { schema } = mongoose;

main().then(()=>{
    console.log("connection successful");
}).
catch(err=> console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
};

const orderSchema = new mongoose.Schema({
    item: String,
    price: Number

})

const customerSchema = new mongoose.Schema({
    name:String,
    orders:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"order",
        }

    ]

});

const findCustomer = async ()=>{
    let result = await customer.find({}).populate("orders");
    console.log(result[0]);
}

const order = mongoose.model("order", orderSchema);
const customer = mongoose.model("customer",customerSchema);

findCustomer();

// const addCustomer = async ()=>{
//     let cust1 = new customer({
//         name:"rahulKumar"
    
//     });

//     let order1 = await order.findOne({item:"chips"});
//     let order2 = await order.findOne({item:"chocolate"});
//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let result = await cust1.save();
//     console.log(result);
// }
// addCustomer();

// const addOrder = async()=>{
//     let result = await order.insertMany([
//         {item:"samosa", price: 12},
//         {item:"chips", price:10},
//         {item:"chocolate",price:40}
//     ]);
//     console.log(result);
// }

// addOrder();