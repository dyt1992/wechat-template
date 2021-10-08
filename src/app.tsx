import * as React from 'react'
import './app.scss'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false, keepPreviousData: true } }
})

const App: React.FC = (props) => {
  return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
}

export default App
