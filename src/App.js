import './App.css';
import PutItTogether from './components/PutItTogether';

function App() {
  return (
    <div className="App">
      <PutItTogether firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
      <PutItTogether firstName="John" lastName="Smith" age={88} hairColor="Brown" />
    </div>
  );
}

export default App;
