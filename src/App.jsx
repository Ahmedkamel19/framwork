import './App.css'
import { Main } from './components/Main.jsx'
import { Layout } from './components/Layout.jsx'
import { Contact } from './components/Contact.jsx'
import { Protofolio } from './components/Protofolio.jsx'
import { About } from './components/About.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  let router=createBrowserRouter([
    {path:"", element : <Layout/> , children:[
      {path:"",element:<Main/>},
      {path:"About",element:<About/>},
      {path:"Contact",element:<Contact/>},
      {path:"Protofolio",element:<Protofolio/>},
      
    ]}
  ])
  return (
    <div className='relative h-screen'>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
