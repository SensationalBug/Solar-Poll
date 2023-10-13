// import './App.css';
import { router } from './routes/Router';
import { RouterProvider } from "react-router-dom";
import MediaProvider from './context/MediaContext';
import QuestionProvider from './context/QuestionsContext';
import SurveysProvider from './context/SurveysContext';

const App = () => {

  return (
    <QuestionProvider>
      <SurveysProvider>
        <MediaProvider>
          <RouterProvider router={router} />
        </MediaProvider>
      </SurveysProvider>
    </QuestionProvider>
  );
}

export default App;
