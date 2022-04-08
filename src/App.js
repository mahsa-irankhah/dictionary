import './App.css';
import SearchWord from './SearchWord';
import logo from './images/logo1.png'


function App() {
  return (
    <div className="App">
      <header className="App-header d-flex justify-content-center p-5">
        <img src={logo} alt='dictionary-logo'/>
      </header>
      <SearchWord />
      <footer>
        <p className='text-center m-3'>
          <a href="https://github.com/mahsa-irankhah/dictionary">open-source</a>{" "}
          project coded by Mahsa Irankhah
        </p>
      </footer>
    </div>
  );
}

export default App;
