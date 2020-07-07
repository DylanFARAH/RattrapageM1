class Ingredient
{
    constructor(nom, mesure,desc,tmp_cuisson)
    {
        this.nom = nom;
        this.mesure = mesure;
        this.desc = desc;
        this.tmp_cuisson = tmp_cuisson;

    }
    IngredientSchema = new Schema({
        id : String,
        nom : { type : String, required : true},
        mesure : { type : String, required : true},
        desc : { type : String, required : true},
        tmp_cuisson : { type : double, required : true}
    });
    
}