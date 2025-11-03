import React from 'react'
  import innertylees from './innerStylees.module.css'


const AboutUS = () => {
  return (
    <main>
           <section className={innertylees.bread}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <h1>About US</h1>
                            </div>
                        </div>
                    </div>
            
                </section>
                 <section className={`py-4 ${innertylees.AboutUS}`}>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-12'>
                                      <h1 className='p-3'>🚀 Our Mission</h1>
                                      <p>Our mission at <strong>Bike Wala</strong> is to empower bike enthusiasts and buyers with accurate, up-to-date, and unbiased information. We aim to simplify the process of finding, comparing, and choosing bikes by providing detailed specifications, reviews, and expert opinions — helping every rider make confident decisions with ease.</p>

                                      <h1 className='p-3'>🌟 Our Vision</h1>
                                      <p>Our vision is to become <strong>India’s most trusted and comprehensive bike discovery platform,</strong> connecting riders with the perfect bikes that match their needs and passions. We strive to build a community where technology, transparency, and trust come together — inspiring a smarter, safer, and more enjoyable biking experience for everyone.</p>

                                      <h1 className='p-3'>🏍️ Our Features</h1>
                                      <p>Highlight what makes Bike Wala stand out — like easy comparisons, expert reviews, and detailed specs.</p>
                             <strong>Example paragraph:</strong>
                               <p>  Explore powerful tools that help you compare bikes, read trusted reviews, and stay updated with the latest launches — all in one place. </p>
                                  <h1 className='p-3'>⭐ Why Choose Us</h1>
                                  <p>Show users why they should trust and use your platform.</p>
                                  <strong>Example paragraph:</strong>
                                  <p>We combine accuracy, transparency, and passion for biking to give you the best experience possible. At Bike Dekho, it’s not just about bikes — it’s about helping you make the right choice.</p>

                                  <h1 className='p-3'>📰 Latest Bikes</h1>
                                  <p>Perfect for showing new models or upcoming launches.</p>
                                  <strong>Example paragraph:</strong>
                                  <p>Stay updated with the latest bikes hitting the roads. From sleek scooters to powerful superbikes, discover what’s new and trending in the world of two-wheelers.</p>
 
                                    </div>
                                </div>
                            </div>
                    
                        </section>
    </main>
  )
}

export default AboutUS