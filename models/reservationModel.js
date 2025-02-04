const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema(
    {
        customer : {
            type: String,
            required: true,
        },
        package:{
            type: String,
            required: true,
            enum: ['standard', 'breakfast', 'dinner'],  // 가능한 값 제한
            message: 'Package must be one of the following: standard, breakfast, dinner', // 옵션 값이 맞지 않을 경우 표시할 메시지
        },
        dayNumber:{
            type: Number,
            required: true,
            enum: [1, 2, 3, 4, 5, 6, 7],  // 가능한 값 제한
            message: 'dayNumber must be one of the following: 1 ~ 7',
        },
        createdAt: {
            type: Date,
            default: () => {
                const today = new Date();
                return new Date(today.getFullYear(), today.getMonth(), today.getDate()); // 연월일만 저장
            },
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