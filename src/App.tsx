import './index.css'
import Hero from './pages/main/Hero/Hero'
import Games from './pages/main/Games/Games'
import Down from './pages/main/Download/Down'

import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

function App() {
  const client = new QueryClient()

  return (
    <div>
      <QueryClientProvider client={client}>
        <Hero />
        <Games />
        {/*<Down />*/}
      </QueryClientProvider>
    </div>
  )
}

export default App
