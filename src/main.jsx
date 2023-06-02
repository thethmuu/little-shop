// react, react-dom

import ReactDOM from 'react-dom/client';

import Reddit from './components/Reddit';
import './App.css';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);

function App() {
  return (
    <>
      <Reddit />
    </>
  );
}
