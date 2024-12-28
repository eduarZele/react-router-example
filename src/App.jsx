import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing, Home, Dashboard, Analytics, Admin } from './pages/Index'
import NotFoundPage from './pages/NotFoundPage'
import NavBar from './components/NavBar'
import { useState } from 'react'
import { ProtectedRoute } from './components/ProtectedRoute'

function App() {

  const [user, setUser] = useState(null);

  const login = () => {
    setUser({
      id: 1,
      username: 'John',
      permissions: ['analize'],
      roles: ['admin']
    });
  }

  const logout = () => {
    setUser(null);
  }

  return (
    <BrowserRouter>

      <NavBar />

      {
        user
          ? (<button onClick={logout}>Logout</button>)
          : (<button onClick={login}>Login</button>)
      }

      <Routes>
        <Route index element={<Landing />} />

        {/* user ? true : false es igual a !!user (sirve cuando se devuelve un booleano)
         (sólo son formas de escribir código más corto)*/}
        <Route path='/' element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path='home' element={<Home />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
        <Route path='/analytics' element={
          <ProtectedRoute
            isAllowed={!!user && user.permissions.includes('analize')}
            redirectTo='/home'
          >

            <Analytics />
          </ProtectedRoute>
        } />
        <Route path='/admin' element={
          <ProtectedRoute
            isAllowed={!!user && user.roles.includes('admin')}
            redirectTo='/home'
          >
            <Admin />
          </ProtectedRoute>
        } />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
