export class Homework{
    constructor(
        public _id: string,
        public nameHomework: string,
        public description:string,
        public urgencyLevel:string,
        public importanceLevel:string
    ){
    }
}