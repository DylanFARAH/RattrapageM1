let mongoose = require('mongoose'),
    Schema	 	= mongoose.Schema;

    let IngredientSchema = new Schema({
        id : String,
        nom : { type : String, required : true},
        mesure : { type : String, required : true},
        desc : { type : String, required : true},
        tmp_cuisson : { type : double, required : true}
    });

    
    
