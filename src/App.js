import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hello from './components/Hello/Hello';
import Hobby from './components/Hobby/Hobby';

function App() {
  const [counterLeft, setCounterLeft] = useState(0)
  const [counterRight, setCounterRight] = useState(0)
  const [counterHistory, setCounterHistory] = useState('')

  const leftClick = () => {
    setCounterLeft(counterLeft + 1)
    setCounterHistory(counterHistory + ' L')
  }
  
  const rightClick = () => {
    setCounterRight(counterRight + 1)
    setCounterHistory(counterHistory + ' R')
  }


  // const [counter, setCounter] = useState(0); //[state, setFn]
  // const handleClick = () => {
  //   setCounter(counter + 1)
  // }
  // const decreaseByOne = () => {
  //   setCounter(counter - 1)
  // } 
  // const changeToZero = () => {
  //   setCounter(0)
  // }
  return (
    <div className='App'>
      <Header />
      <p style={{ fontSize: '40px' }}>Клик левой кнопки {counterLeft}</p>
      <p style={{ fontSize: '40px' }}>Клик правой кнопки {counterRight}</p>
      <button onClick={leftClick}>Клик левой</button>
      <button onClick={rightClick}>Клик правой</button>
      <h1>История кликов {counterHistory}</h1>


      {/* <p style={{ fontSize: '60px' }}>{counter}</p>
      <button onClick={handleClick}>Увеличить на 1</button>
      <button onClick={decreaseByOne}>Уменьшить на 1</button>
      <button onClick={changeToZero}>Reset</button> */}


      <Hello name='Maral' age='28' />
      <Hobby arts='painting, reading' />
      <Hello name='Max' age='25' />
      <Hobby sports='camping, swimming' />
      <Hello name='Alice' age='24' />
      <Hobby sports='basketball, dancing' />
      <Footer />
    </div>
  );
}

export default App;

// Feature Slices

// Компонент - функция, которая возвращает JSX (HTML+JS) разметку
// Декомпозиция - разделение кода на компоненты
