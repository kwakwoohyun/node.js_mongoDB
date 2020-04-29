const mongoos = require('mongoose')

const { Schema } = mongoos
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
    },
    married: {
        type: Boolean,
        required: true,
    },
    comment: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
})
// model 메서드로 스키마와 몽고디비 컬렉션을 연결하는 모델을 만든다. 
module.exports = mongoos.model('User', userSchema)