import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home';
import Auth from './pages/auth/auth';
import {
  createBrowserRouter,

  RouterProvider,
} from "react-router-dom";


const appRoutes = createBrowserRouter([
  {
    path : "/" ,
    element : <Home />    
  } , 
  {
    path : "/auth",
    element : <Auth />
  }
])

function App() {
  return (
    <div className="App">
     <RouterProvider router={appRoutes} />
    </div>
  );
}

export default App;
