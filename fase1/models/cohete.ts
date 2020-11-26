class Cohete{
    private id:string;
    public propulsores:Array<Propulsor> = new Array();
    
    constructor(id:string){
        this.id = id;
    }

    public getId():string{
        return this.id;
    }

    public setId(id:string):void{
        this.id = id;
    }
    
    public createPropulsor(propulsor:Propulsor):void{
        this.propulsores.push(propulsor);
    }
}