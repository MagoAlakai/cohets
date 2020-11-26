var Cohete = /** @class */ (function () {
    function Cohete(id) {
        this.potenciaMax = 0;
        this.potenciaActual = 0;
        this.propulsores = new Array();
        this.id = id;
    }
    Cohete.prototype.getId = function () {
        return this.id;
    };
    Cohete.prototype.setId = function (id) {
        this.id = id;
    };
    Cohete.prototype.getPotenciaMax = function () {
        return this.potenciaMax;
    };
    Cohete.prototype.setPotenciaMax = function (potenciaMax) {
        this.potenciaMax = potenciaMax;
    };
    Cohete.prototype.getPotenciaActual = function () {
        return this.potenciaActual;
    };
    Cohete.prototype.setPotenciaActual = function (potenciaActual) {
        this.potenciaActual = potenciaActual;
    };
    Cohete.prototype.calcularPotenciaMax = function () {
        var potenciaMax = 0;
        var i = 0;
        for (i; i < this.propulsores.length; i++) {
            potenciaMax += this.propulsores[i].getPotencia();
        }
        this.setPotenciaMax(potenciaMax);
    };
    Cohete.prototype.createPropulsor = function (propulsor) {
        this.propulsores.push(propulsor);
    };
    Cohete.prototype.acelerar = function () {
        this.calcularPotenciaMax();
        var potenciaSumar = 0;
        var potenciaActualCohete = 0;
        var i = 0;
        if (this.getPotenciaActual() < this.getPotenciaMax()) {
            for (i; i < this.propulsores.length; i++) {
                if (this.propulsores[i].getPotencia() !== this.propulsores[i].getPotenciaActual()) {
                    potenciaSumar = this.propulsores[i].getPotenciaActual() + 10;
                    this.propulsores[i].setPotenciaActual(potenciaSumar);
                    potenciaActualCohete = this.getPotenciaActual() + 10;
                    this.setPotenciaActual(potenciaActualCohete);
                }
            }
        }
        else {
            alert('Ha superado la potencia máxima, ya no puede acelerar más');
        }
    };
    Cohete.prototype.frenar = function () {
        var potenciaRestar = 0;
        var potenciaActualCohete = 0;
        var i = 0;
        if (this.getPotenciaActual() !== 0) {
            for (i; i < this.propulsores.length; i++) {
                if (this.propulsores[i].getPotenciaActual() > 0) {
                    potenciaRestar = this.propulsores[i].getPotenciaActual() - 10;
                    this.propulsores[i].setPotenciaActual(potenciaRestar);
                    potenciaActualCohete = this.getPotenciaActual() - 10;
                    this.setPotenciaActual(potenciaActualCohete);
                }
            }
        }
        else {
            alert('No tiene potencia, ya no puede frenar más');
        }
    };
    return Cohete;
}());
