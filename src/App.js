// import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/ClickCounter';
import ComponentC from './components/ComponentC';
import Counter from './components/Counter';
import HoverCounter from './components/HoverCounter';
import { UserProvider } from './components/UserContext';

function App() {
  return (
      <div className="App">
        <UserProvider value="Dalia">
          <ComponentC/>
        </UserProvider>
        <hr/>
        <h1>Render Props Pattern</h1>
        <Counter
            render={(count, incrementHandler) => (
                <ClickCounter
                    count={count}
                    incrementHandler={incrementHandler}
                />
            )}
        ></Counter>
        <Counter
            render={(count, incrementHandler) => (
                <HoverCounter
                    count={count}
                    incrementHandler={incrementHandler}
                />
            )}
        ></Counter>
      </div>
  );
}

export default App;
