import mongoose from "mongoose"

const dbConnect =() => {
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology:true
    }
    mongoose.connect(process.env.MONGO_URL, options)
        .then(()=>console.log('db is connected'))
        .catch(()=> console.log('db connect error'))


}

export default dbConnect