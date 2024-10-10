import { Schema, model } from 'mongoose';

const impresoraSchema = new Schema ({
    idImpresora: {type: Number, required: true, unique: true},
    impresora: {type: String, required: true},
    papelPrincipal: {type: String, required: true},
    papelCorte: {type: String, required: true},
    estado: {type: Boolean}
})

export default model("Impresora", impresoraSchema);