class Cohete{
    id:string;
    public propulsores = new Array();
    
    constructor(id:string){
        this.id = id;
    }
    
    createPropulsor(propulsor:number):void{
        this.propulsores.push(propulsor);
    }
}