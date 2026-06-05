import { Route, Routes } from 'react-router-dom'
import { appRoutes } from '../../routes/routes'

export function AppRouter() {
  return (
    <Routes>
      {appRoutes.map((r) => (
        <Route key={r.path} path={r.path} element={r.element} />
      ))}
    </Routes>
  )
}

