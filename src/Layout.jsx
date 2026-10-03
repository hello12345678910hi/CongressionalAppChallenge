import { useState } from 'react'
import { Link, Route, Routes } from 'react-router'
import HomePage from './pages/home'
import ProfilePage from './pages/profile'
import MessagesPage from './pages/messages'
import SignUp from './pages/signup'
import LogIn from './pages/login'
import TemplatePage from './pages/template'

const ROUTES = [
  { path: "/", element: <HomePage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/messages", element: <MessagesPage /> },
  {path: "/signup", element: <SignUp/>},
  {path: "/login", element: <LogIn/>}
]

export default function Layout() {


  return (
    <div className="min-h-screen flex flex-col ">
      {/* Header */}
      <nav className="p-5 space-x-3 flex bg-base-300 flex justify-center">
        <Link to="/">
          <button className="btn btn-ghost">Home</button>
        </Link>
        <Link to="/profile">
          <button className="btn btn-ghost">Profile</button>
        </Link>
        <Link to="/messages">
          <button className="btn btn-ghost">Messages</button>
        </Link>
        <Link to="/login">
          <button className="btn btn-ghost">Login</button>
        </Link>
         <Link to="/signup">
          <button className="btn btn-ghost">SignUp</button>
        </Link>

      </nav>
      {/* Main */}
      <Routes>
        {ROUTES.map((r) => <Route key={r.path} path={r.path} element={r.element} />)}
      </Routes>
      {/* Footer */}
      <div className="p-5 bg-base-300">Footer</div>
    </div>
  )
}
