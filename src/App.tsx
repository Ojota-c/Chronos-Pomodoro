//* Pages
import { MessagesContainer } from './components/MessagesContainer';

//* Elements
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MainRouter } from './routers/MainRouter';

//* Styles
import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
       <MainRouter />
      </MessagesContainer>
    </TaskContextProvider>
  );
}
