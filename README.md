# Counter App with MVI/MVVM Architecture and RxJS

## Project Overview

This project demonstrates the use of the MVI (Model-View-Intent) architecture pattern combined with RxJS to handle user and system intents in a React-based counter application. The app includes functionalities such as increment, decrement, reset, and auto-increment of the counter, with constraints to ensure the count remains between 0 and 98.

## Project Structure

counter-app/
├── src/
│   ├── view/
│   │   └── CounterView.jsx
│   ├── models/
│   │   └── CounterModel.js
│   ├── intents/
│   │   └── CounterIntent.js
│   ├── App.jsx
│   └── index.js
├── public/
│   ├── index.html
│   └── ...
├── package.json
└── README.md



### Directories and Files:
- **src/components/**: Contains React components (e.g., `CounterView.jsx`).
- **src/models/**: Manages the state using RxJS (e.g., `CounterModel.js`).
- **src/intents/**: Contains user action handlers (e.g., `CounterIntent.js`).
- **src/**: Main application entry (`App.js`, `index.js`).
- **public/**: Static files and the main HTML template (`index.html`).

## Packages Used

- **React**: JavaScript library for building user interfaces.
- **RxJS**: Library for handling asynchronous events using Observables.
- **Babel**: JavaScript compiler to convert ES6+ code into backward-compatible JavaScript.
- **Webpack**: Module bundler to bundle JavaScript files for usage in a browser.

## Project Functionality

### Counter Model (`CounterModel.js`)

- Manages the state of the counter using RxJS `BehaviorSubject` and `Subject`.
- Handles state transitions with RxJS operators (`map`, `switchMap`, `scan`, etc.).
- Ensures the count is constrained between 0 and 98.
- `toggleAutoIncrement`: Toggles the state of auto-increment on and off.

### Counter Intent (`CounterIntent.js`)

- Defines user actions (increment, decrement, reset) using `Subject`s to emit events that the Model can react to.
- User actions are dispatched to update the counter state.

### Counter View (`CounterView.jsx`)

- React component that displays the counter and provides buttons for user interactions.
- Binds user actions to the model via intents, including:
  - Increment
  - Decrement
  - Reset
  - Toggle Auto-Increment
- Integrates the Model, Intent, and View components.
- Uses `useEffect` to subscribe to state changes and updates the UI accordingly.
- Manages state and renders the counter application.

### Use Cases

1. **Increment**: Pressing the `+` button increases the count by 1, regardless of Auto Increment status.
2. **Decrement**: Pressing the `-` button decreases the count by 1, regardless of Auto Increment status.
3. **Reset**: Pressing the reset button sets the count back to 0.
4. **Auto Increment**: When enabled, the count increases by 1 every 1.1 seconds. When disabled, the automatic increment ceases.
5. **Count Constraints**: Ensures the count never goes below 0 or above 98.

