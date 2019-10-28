import { Ingredient } from './../shared/ingredient.model';
export class Recipe {
    public id: string;
    public name: string;
    public desc: string;
    public imgUrl: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, imgUrl: string, ingredients: Ingredient[]) {
        this.id =(Math.random() * 1000000).toString(24).slice(0,5);
        this.name = name;
        this.desc = desc;
        this.imgUrl = imgUrl;
        this.ingredients = ingredients;
    }
}
