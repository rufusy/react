import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas doloremque commodi provident, quo voluptatem 
                repudiandae nam iste magnam facilis quae laborum culpa ipsum non. Voluptates ut saepe quis ex sint!</p>
        </div>
    )
}

export default Rainbow(About)