import './App.css';
import Hello from './components/Hello/Hello';
import Hobby from './components/Hobby/Hobby';

function App() {
  return (
    <div className='App'>
      <h1>Приветствие</h1>
      <Hello name='Maral' age='28' />
      <Hobby arts='painting, reading'/>
      <Hello name='Max' age='30' />
      <Hobby sports='camping, swimming' />
      <Hello name='Alice' age='24' />
      <Hobby sports='basketball, dancing' />
    </div>
  );
}

export default App;

// Feature Slices

// Компонент - функция, которая возвращает JSX (HTML+JS) разметку

