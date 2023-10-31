import './App.css';
import WordCount from "./components/WordCount";


function App() {
  return (
    <div className="App"
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '50vh',
    }}>
      <WordCount />

    </div>
  );
}

export default App;
