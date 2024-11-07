import './App.css'
import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom"  // ***Step1***
import Home from './components/Home'
import Aboutus from './components/Aboutus'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import ParamComp from './components/ParamComp'
import Courses from './components/Courses'
import MockTests from './components/MockTests'
import Report from './components/Report'
import NotFound from './components/NotFound'

// ***Step2***
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>
        <Navbar></Navbar>
        <Home />
      </div>
    },
    {
      path: "/about",
      element: <div>
        <Navbar></Navbar>
        <Aboutus />
      </div>
    },
    {
      path: "/dashboard",
      element: <div>
        <Navbar></Navbar>
        <Dashboard />
      </div>,
      children:
        [
          {
            path: "courses",
            element:
              <div>
                <NavLink />
                <Courses />
              </div>
          },
          {
            path: "mock-tests",
            element:
              <div>
                <NavLink />
                <MockTests />
              </div>

          },
          {
            path: "report",
            element:
              <div>
                <NavLink />
                <Report />
              </div>
          },
        ]
    },
    {
      path: "/students/:id",
      element:
        <div>
          <Navbar />
          <ParamComp />
        </div>
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]
)

function App() {

  return (
    <div>
      {/* <h1>Hello World</h1> */}
      {/* ***Step3*** */}
      <RouterProvider router={router}>
              
      </RouterProvider>
    </div>
  )
}

export default App
