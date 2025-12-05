//* Pages
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { Home } from './pages/Home';

//* Styles
import './styles/global.css';
import './styles/theme.css';

export function App() {

  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
