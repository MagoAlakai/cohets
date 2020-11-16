var Cohete = /** @class */ (function () {
    function Cohete(id) {
        this.propulsores = new Array();
        this.id = id;
    }
    Cohete.prototype.createPropulsor = function (propulsor) {
        this.propulsores.push(propulsor);
    };
    return Cohete;
}());
