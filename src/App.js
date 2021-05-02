import React from 'react';
import Chart from './components/Chart.js/Chart';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import useLocalStorage from './Hooks/useLocalStorage';

function App() {
  const [id, setId ] = useLocalStorage('id');
  console.log(id)
  return (
   id ? <Chart /> :  <Login onSubmitValue={setId}/>
  
  );
}

export default App;
