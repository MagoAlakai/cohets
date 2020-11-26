class Cohete{
    private id:string;
    private potenciaMax:number = 0;
    private potenciaActual:number = 0;
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

    public getPotenciaMax():number{
        return this.potenciaMax;
    }

    public setPotenciaMax(potenciaMax:number):void{
        this.potenciaMax = potenciaMax;
    }

    public getPotenciaActual():number{
        return this.potenciaActual;
    }

    public setPotenciaActual(potenciaActual:number):void{
        this.potenciaActual = potenciaActual;
    }

    public calcularPotenciaMax(){
        let potenciaMax:number = 0;
        let i:number = 0;
        for(i; i < this.propulsores.length; i++){
            potenciaMax += this.propulsores[i].getPotencia();
        }
        this.setPotenciaMax(potenciaMax);
    }
    
    public createPropulsor(propulsor:Propulsor):void{
        this.propulsores.push(propulsor);
    }

    public acelerar(){
        this.calcularPotenciaMax();
        let potenciaSumar:number = 0;
        let potenciaActualCohete:number = 0;
        let i:number = 0;
        if(this.getPotenciaActual() < this.getPotenciaMax()){
            for(i; i < this.propulsores.length; i++){
                    if(this.propulsores[i].getPotencia() !== this.propulsores[i].getPotenciaActual()){
                        potenciaSumar = this.propulsores[i].getPotenciaActual() + 10;
                        this.propulsores[i].setPotenciaActual(potenciaSumar);
                        potenciaActualCohete = this.getPotenciaActual() + 10;
                        this.setPotenciaActual(potenciaActualCohete);
                    }
                
            }
        }else{
            alert('Ha superado la potencia máxima, ya no puede acelerar más');
        }
    }

    public frenar(){
        let potenciaRestar:number = 0;
        let potenciaActualCohete:number = 0;
        let i:number = 0;
        if(this.getPotenciaActual() !== 0){
            for(i; i < this.propulsores.length; i++){
                if(this.propulsores[i].getPotenciaActual() > 0){
                    potenciaRestar = this.propulsores[i].getPotenciaActual() - 10;
                    this.propulsores[i].setPotenciaActual(potenciaRestar);
                    potenciaActualCohete = this.getPotenciaActual() - 10;
                    this.setPotenciaActual(potenciaActualCohete);
                }    
            }
        }else{
            alert('No tiene potencia, ya no puede frenar más');
        }
    }
}