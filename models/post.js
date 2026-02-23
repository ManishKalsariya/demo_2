const mongoose  = require('mongoose');
const {Schema} = mongoose;

main().then(()=>{
    console.log("connection successful");
}).
catch(err=> console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
};

const  userSchema = new mongoose.Schema({
    username: String,
    email:String,


});

const postSchema = new mongoose.Schema({
    content:String,
    likes: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
    }

})

const user = mongoose.model("user",userSchema);
const post = mongoose.model("post",postSchema);

const getData = async ()=>{
    let result = await post.find({}).populate("user","username");
    console.log(result);
}
;;;
getData();
