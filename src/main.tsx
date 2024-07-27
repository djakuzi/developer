import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './layout/HomePage/HomePage'
import AboutMe from './pages/AboutMe/AboutMe'
import Projects from './pages/Projects/Projects'
import Resume from './pages/Resume/Resume'
import { store } from './redux/store'


const Router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children:[
      {
        path: 'resume',
        element: <Resume></Resume>
      },
      {
        path: 'projects',
        element: <Projects></Projects>,
      },
      {
        path: 'aboutMe',
        element: <AboutMe></AboutMe>
      }
    ]
  },
  {
    path: "*",
    element: <>Произошла ошибка{'((('}</>,
  }

], {basename: '/developer'})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider  store={store}>
      <RouterProvider router={Router} />
    </Provider>
    
  </React.StrictMode>,
)
