"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractObservable = (function () {
    function AbstractObservable() {
    }
    AbstractObservable.prototype.addObserver = function (obs) {
        this.observers.push(obs);
    };
    AbstractObservable.prototype.removeObserver = function (obs) {
        if (this.observers.indexOf(obs) > -1) {
            this.observers.splice(this.observers.indexOf(obs));
        }
    };
    AbstractObservable.prototype.notifyObservers = function () {
        for (var i = 0; i < this.observers.length; i++) {
            this.observers[i].observableValueChanged();
        }
    };
    return AbstractObservable;
}());
exports.AbstractObservable = AbstractObservable;
//# sourceMappingURL=AbstractObservable.js.map