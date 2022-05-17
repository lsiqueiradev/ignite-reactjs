import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';

function App() {
  return (
    <div>
      <RepositoryList />
      <Counter />
    </div>
  )
}

export { App };