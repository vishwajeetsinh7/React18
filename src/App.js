import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from './components/Body'
import Footer from "./components/Footer";
import About from './components/About'
import Error from './components/Error'

import { createBrowserRouter , RouterProvider } from "react-router-dom";



const AppLayout = () => { 
    return (
      <React.Fragment>
        <Header/>
        <About/>
        <Body/>
        <Footer/>
      </React.Fragment>
    )
}

const appRouter = createBrowserRouter([
  { 
    path: '/', 
    element: <AppLayout/>, 
    errorElement: <Error/>
  },
  {
    path: '/about', 
    element: <About/>
  }
])


const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root.
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter}/>)
