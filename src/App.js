import './App.css';
import SearchWord from './SearchWord';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-center m-5">Dictionary</h1>
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
