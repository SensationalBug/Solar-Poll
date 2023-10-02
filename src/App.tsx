import './App.css';
import Main from './home/Main';
import QuestionProvider from './context/QuestionsContext';

function App() {
  return (
    <QuestionProvider>
      <Main />
    </QuestionProvider>
  );
}

export default App;
