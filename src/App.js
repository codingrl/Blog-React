import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hello from './components/Hello/Hello';
import Hobby from './components/Hobby/Hobby';

function App() {
  return (
    <div className='App'>
      <Header />   
      <Hello name='Maral' age='28' />
      <Hobby arts='painting, reading'/>
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

