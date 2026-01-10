import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import { Analytics } from '@vercel/analytics/react'



export const Layout=()=>{
return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    <Analytics/>
    </>
)
}