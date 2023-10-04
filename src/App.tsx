import './App.css';
import Main from './home/Main';
import QuestionProvider from './context/QuestionsContext';
import MediaProvider from './context/MediaContext';

function App() {
  return (
    <QuestionProvider>
      <MediaProvider>
        <Main />
      </MediaProvider>
    </QuestionProvider>
  );
}

export default App;
