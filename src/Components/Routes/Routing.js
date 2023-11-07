import React from 'react'
import Dashboard from "../.././Pages/Dashboard/Dashboard"
import Home from "../../Pages/Home/Home"
import Individual from "../../Pages/Individual"
import {Routes,Route} from 'react-router-dom'



export const Routing=()=>{
    
    const Route_arr=[
        {path:"/",component:<Home/>},
        {path:"/studentdashboard",component:<Dashboard/>},
        {path:"/course/:id",component:<Individual/>}
    ]

    return(<>
        <Routes>
        {Route_arr?.map((route,index)=>
        <Route key={index} path={route.path} element={route.component}/>
        )}
        </Routes>
        
        </>)
}