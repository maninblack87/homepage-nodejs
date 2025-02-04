const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema(
    {
        customer : {
            type: String,
            required: true,
        },
        telephone:{
            type: String,
            required: true,
        },
        package:{
            type: String,
            required: true,
            enum: ['standard', 'breakfast', 'dinner'],  // 가능한 값 제한
            message: 'Package must be one of the following: standard, breakfast, dinner', // 옵션 값이 맞지 않을 경우 표시할 메시지
        },
        isAccepted:{
            type:Boolean,
            required: true,
            default: false,
        }
    }
)

// 내보내기
module.exports = mongoose.model("Reservation", reservationSchema);