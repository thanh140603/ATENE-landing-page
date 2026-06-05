import type { ReactElement } from 'react'
import { LandingPage } from '../views/LandingPage/LandingPage'

export type AppRoute = {
  path: string
  element: ReactElement
}

export const appRoutes: AppRoute[] = [{ path: '/', element: <LandingPage /> }]

