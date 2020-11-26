class Propulsor{
    public potencia:number;

    constructor(potencia:number){
        this.potencia = potencia;
    }

    public getPotencia():number{
        return this.potencia;
    }

    public setPotencia(potencia:number):void{
        this.potencia = potencia;
    }
}