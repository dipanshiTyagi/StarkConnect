
import { createBrowserRouter,RouterProvider} from 'react-router-dom'


import Home from './components/Home'
import Login from './components/auth/Login'
import JobDescription from './components/JobDescription'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import Signup from './components/auth/Signup'
//this is an array, we need to fill objects in which key is path and value is that element.
const appRouter = createBrowserRouter([
  {
      path:'/',
      element:<Home/>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: "/jobs",
    element: <Jobs />
  },
  {
    path: "/description/:id",
    element: <JobDescription />
  },
  {
    path: "/browse",
    element: <Browse />
  },
  {
    path: "/profile",
    element: <Profile />
  },

])
function App() {


  return (
    <>
     <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
