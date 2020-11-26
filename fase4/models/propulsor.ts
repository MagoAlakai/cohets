class Propulsor{
    private potencia:number;
    private potenciaActual:number = 0;

    constructor(potencia:number){
        this.potencia = potencia;
    }

    public getPotencia():number{
        return this.potencia;
    }

    public setPotencia(potencia:number):void{
        this.potencia = potencia;
    }

    public getPotenciaActual():number{
        return this.potenciaActual;
    }

    public setPotenciaActual(potenciaActual:number):void{
        this.potenciaActual = potenciaActual;
    }

}