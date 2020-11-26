var Propulsor = /** @class */ (function () {
    function Propulsor(potencia) {
        this.potenciaActual = 0;
        this.potencia = potencia;
    }
    Propulsor.prototype.getPotencia = function () {
        return this.potencia;
    };
    Propulsor.prototype.setPotencia = function (potencia) {
        this.potencia = potencia;
    };
    Propulsor.prototype.getPotenciaActual = function () {
        return this.potenciaActual;
    };
    Propulsor.prototype.setPotenciaActual = function (potenciaActual) {
        this.potenciaActual = potenciaActual;
    };
    return Propulsor;
}());
