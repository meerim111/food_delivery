import mongoose from 'mongoose'
import bcrypt from 'bcrypt-nodejs'


const  userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:'user'

    }
    })


userSchema.pre('save',async function f(next){
    if(!this.isModified('password')){
        return next()
    }
    this.password = bcrypt.hashSync(this.password)

    return next()
})

userSchema.method.authenticate = function(password) {
    return bcrypt.compareSync(password,this.password)
}


export default mongoose.model('User',userSchema)