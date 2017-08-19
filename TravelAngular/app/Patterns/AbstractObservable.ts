import { AuthObserver } from './AuthObserver';

export abstract class AbstractObservable {

    observers: AuthObserver[];

    addObserver(obs: AuthObserver):void {
        this.observers.push(obs);
    }

    removeObserver(obs: AuthObserver): void {
        if (this.observers.indexOf(obs) > -1) {
            this.observers.splice(this.observers.indexOf(obs));
        }
    }

    notifyObservers() {
        for (var i = 0; i < this.observers.length; i++){
            this.observers[i].observableValueChanged();
        }
    }
}