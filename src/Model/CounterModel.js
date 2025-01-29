import { BehaviorSubject } from 'rxjs';

export const CounterModel = {
  counter$: new BehaviorSubject(0),
  autoIncrement$: new BehaviorSubject(false),

  increment() {
    const current = this.counter$.getValue();
    if (current < 98) {
      console.log('Incrementing:', current + 1);  
      this.counter$.next(current + 1);
    }
  },

  decrement() {
    const current = this.counter$.getValue();
    if (current > 0) {
      console.log('Decrementing:', current - 1); 
      this.counter$.next(current - 1);
    }
  },

  reset() {
    console.log('Resetting counter');  
    this.counter$.next(0);
  },

  toggleAutoIncrement() {
    const current = this.autoIncrement$.getValue();
    console.log('Toggling Auto Increment:', !current);  
    this.autoIncrement$.next(!current);
  }
};
