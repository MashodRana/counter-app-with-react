import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Stats from './components/Stats';
import { useState } from 'react';

const initialState = [
  {
    id: 1,
    count: 0
  },
  {
    id: 2,
    count: 0
  }
]
function App() {
  const [state, setState] = useState(initialState)

  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0)
  }

  const incrementHandler = (id) => {
    const updatedState = state.map(c => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count + 1
        }
      }

      return { ...c }
    })

    setState(updatedState)
  }

  const decrementHandler = (id) => {
    const updatedState = state.map(c => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count - 1
        }
      }

      return { ...c }
    })

    setState(updatedState)
  }

  return (
    <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>
      {
        state.map(c => <Counter
          key={c.id}
          id={c.id}
          count={c.count}
          incrementHandler={incrementHandler}
          decrementHandler={decrementHandler}
        />)
      }
      <Stats total={totalCount()} />
    </div>
  );
}

export default App;
