import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import User from './Components/User/User.jsx'
import Github, {githubInfoLoader} from './Components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout />,
//     children:[
//       {
//         path:'',
//         element: <Home />
//       },
//       {
//         path:'about',
//         element: <About />
//       }
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route  path='' element={<Home/>} />
      <Route  path='about' element={<About/>} />
      <Route  path='home' element={<Home />} />
      <Route  path='user/:id' element={<User />} />
      <Route loader={githubInfoLoader} path='github' element={<Github />} />

    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
