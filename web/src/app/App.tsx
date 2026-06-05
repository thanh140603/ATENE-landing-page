import { AppRouter } from './providers/AppRouter'
import { I18nProvider } from './i18n/I18nContext'

export function App() {
  return (
    <I18nProvider>
      <AppRouter />
    </I18nProvider>
  )
}

