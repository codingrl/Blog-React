import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';

function App() {    
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/posts' element={<Posts />} />    
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// Feature Slices

// Компонент - функция, которая возвращает JSX (HTML+JS) разметку
// Декомпозиция - разделение кода на компоненты


// Стилизовать приложение с помощью модульных силей