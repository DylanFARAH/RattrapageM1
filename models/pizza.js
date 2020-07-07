class Pizza
{
    constructor(nom, desc, ingredients,qt)
    {
        this.nom = nom;
        this.desc = desc;
        this.ingredients = ingredients;
        this.qt = qt;
    }

    PizzaSchema = new Schema({
        id : String,
        nom : { type : String, required : true},
        desc : String,
        ingredients : { type : String, required : true},
        qt : { type : int, required : true}
    });
    
    addIngrediant()
    {

    }

}