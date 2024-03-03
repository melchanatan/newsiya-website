import React from 'react'
import Home from './pages/Home'
import WithSplashscreen from './components/WithSplashscreen'

const Page = () => {
  return (
    <div>
        <WithSplashscreen>
            <Home />
        </WithSplashscreen>
            
    </div>
  )
}

export default Page