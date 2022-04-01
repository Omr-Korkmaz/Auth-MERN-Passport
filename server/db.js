const { default: mongoose } = require("mongoose");

module.exports = async ()=>{


    const connectionsParams = {
        useNewUrlParser:true,
        useUnifiedTopology:true
    };
    try{
await mongoose.connect(process.env.DB, connectionsParams)
console.log('connexted to Database succesfully')
    }
    catch(error){

        console.log(error);
        console.log('hata var databae baglanma ile alakali');
    }
}
