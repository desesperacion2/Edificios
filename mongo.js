const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/Proyect")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("users",newSchema)




const departmentSchema = new mongoose.Schema({
    Number: {
        type: String,
        required: true
    }
});

const Department = mongoose.model('departments', departmentSchema);

module.exports = { collection, Department};
