import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your main App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function MyComponent() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

export default MyComponent;

