import React from 'react'
import { Navigate, Outlet } from 'react-router'

export const ProtectedRoute = ({isAllowed, children, redirectTo ="/"}) => {
    if (!isAllowed) {
        return <Navigate to={redirectTo} />
    }
    //se mira si hay múltiples rutas protegidas (<Outlet />) o sólamente una ruta o hijo (Componente) en específico (children).
    return children ? children : <Outlet/>
}