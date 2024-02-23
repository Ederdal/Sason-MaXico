import { Schema, model } from "mongoose";

const productSchema = new Schema({
    barcode: {
        type: String,
        unique: true // asegura que cada barcode sea único
    },
    name: {
        type: String
    },
    description: String,
    price: Number,  
    status: Number
},
{
    versionKey: false,
    timestamps: true
});

export default model('Comidas', productSchema);
