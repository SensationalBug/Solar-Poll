import { router } from './routes/Router';
import UserProvider from './context/UserContext';
import { RouterProvider } from "react-router-dom";
import MediaProvider from './context/MediaContext';
import SurveysProvider from './context/SurveysContext';
import QuestionProvider from './context/QuestionsContext';

const App = () => {

  return (
    <UserProvider>
      <QuestionProvider>
        <SurveysProvider>
          <MediaProvider>
            <RouterProvider router={router} />
          </MediaProvider>
        </SurveysProvider>
      </QuestionProvider>
    </UserProvider>
  );
}

export default App;
