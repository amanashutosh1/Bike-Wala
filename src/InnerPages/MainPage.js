import React from 'react'
import innertylees from './innerStylees.module.css'
import 'animate.css'

const MainPage = () => {
  return (
    <div className={innertylees.banner}>
      <div className={innertylees.content}>
        
        <h1 className="animate__animated animate__fadeInLeft text-center p-5">
          Welcome to Bike Wala – Your Ultimate Bike Destination!
        </h1>

        <p className="animate__animated animate__fadeInUp animate__delay-1s text-center text-success">
          Your one-stop destination for all things bikes! Explore the latest models, compare features, check prices, and find the perfect ride that fits your style and budget.
        </p>

        <h1 className="animate__animated animate__zoomIn text-center p-5">
          Find Your Perfect Ride with Bike Wala
        </h1>

        <p className="animate__animated animate__fadeInRight animate__delay-2s text-center text-primary">
          Find your perfect bike with <strong>Bike Wala</strong> — explore, compare, and choose the best ride for your journey.
        </p>

        <h1 className={`animate__animated animate__zoomIn animate__delay-3s text-center p-5 ${innertylees.glowText}`}>
          <strong>Ride with Confidence, Wishing You Happy Miles Ahead 🚴‍♂️</strong>
        </h1>

      </div>
    </div>
  )
}

export default MainPage
