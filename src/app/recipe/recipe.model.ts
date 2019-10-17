import { Ingredient } from './../shared/ingredient.model';
export class Recipe {
    public name: string;
    public desc: string;
    public imgUrl: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, imgUrl: string, ingredients: Ingredient[]) {
        this.name = name;
        this.desc = desc;
        this.imgUrl = imgUrl;
        this.ingredients = ingredients;
    }
}
