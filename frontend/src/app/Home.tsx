import Image from "next/image";
import { BrowserRouter, Routes, Route, Link, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import AboutPage from "./about/AboutPage";
import ArtistsPage from "./artists/ArtistsPage";
import ContactPage from "./contact/ContactPage";
import EventPage from "./events/EventPage";
import IndEvent from "./events/[slug]/IndEvent";
import MerchPage from "./merch/MerchPage";
import IndMerch from "./merch/[slug]/IndMerch";
import { StrictMode } from "react";
import MadeByHumans from "./made_by_humans/MadeByHumans";
import HeroSection from "../components/home/HeroSection";

const router = createBrowserRouter([
  { path: '/', element: <Home/> },
  { path: '/about', element: <AboutPage/> },
  { path: '/artists', element: <ArtistsPage/> },
  { path: '/contact', element: <ContactPage/> },
  { path: '/events', element: <EventPage/> },
  { path: '/events/:eventId', element: <IndEvent/> },
  { path: '/merch', element: <MerchPage/> },
  { path: '/merch/:merchId', element: <IndMerch/> },
  { path: '/madebyhumans', element: <MadeByHumans/>},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)

export default function Home() {
  return (
      <div>
        <HeroSection/>
      </div>
  )
}