import { interval, from } from 'rxjs';
import { switchMap, takeUntil, filter } from 'rxjs/operators';
import { CounterModel } from '../Model/CounterModel';

export const CounterIntent = {
  initialized: false,

  init() {
    if (this.initialized) return;
    this.initialized = true;

    console.log('Initializing Auto Increment');  

  
    CounterModel.autoIncrement$
      .pipe(
        switchMap(autoIncrement => {
          if (autoIncrement) {
            return interval(1100).pipe(
              takeUntil(CounterModel.autoIncrement$.pipe(filter(value => !value)))
            );
          } else {
            return from([]);
          }
        })
      )
      .subscribe(() => {
        console.log('Auto incrementing'); 
        CounterModel.increment();
      });
  }
};
