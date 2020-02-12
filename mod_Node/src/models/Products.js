const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate');
const ProductShema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true, // campo obrigatorio
    }, 
    url:{
        type: String,
        required: true,
    },
    createdAt:{
        type:Date,
        default: Date.now, // se preenche com o valor data de criação do produto
    },
});

ProductShema.plugin(mongoosePaginate);

mongoose.model('Product', ProductShema); 