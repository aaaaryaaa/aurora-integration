import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import MainPage from './pages/MainPage';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <MainPage/>
        </>
      ),
    },

    {
      path: '/login',
      element: (
        <>
          <Login/>
        </>
      ),
    },

    {
      path: '/register',
      element: (
        <>
          <Login/>
        </>
      ),
    },

    {
      path: '/registration-form',
      element: (
        <>
          {/* <Register /> */}
        </>
      ),
    },

    {
      path: '/hackathon-registration',
      element: (
        <>
          {/* <HackathonRegistration /> */}
        </>
      ),
    },

    {
      path: '/*',
      element: (
        <>
          {/* <Error /> */}
        </>
      ),
    },

  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
