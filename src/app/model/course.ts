import { Category } from "./category";

export class Course {
    constructor(public id?: Number,
        public name?: String,
        public description?: String,
        public image?: String,
        public price?: Number,

        public instructor?: String,
        public date?: String,
        public tag?: String,
        public difficulty?: String,
        public estimated_duration?: String,

        public category?:Category) {}

       
}
