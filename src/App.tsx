// import './App.css';
import { router } from './routes/Router';
import { RouterProvider } from "react-router-dom";
import MediaProvider from './context/MediaContext';
import QuestionProvider from './context/QuestionsContext';

const App = () => {

  return (
    <QuestionProvider>
      <MediaProvider>
        <RouterProvider router={router} />
      </MediaProvider>
    </QuestionProvider>
  );
}

export default App;
