import React from 'react';

function Testimonials() {
    return (
        <div className='testimonials-container'>
            <img className='author-img' src={require('../images/Emma.png')} alt='Emma'/>
            <div className='text-container'>
                <p className='author-name'>Emma Bostia in Sweden</p>
                <p className='author-company'>Software Engineer at Spotify</p>
                <p className='author-text'>
                "I've always struggled with learning JavaScript. 
                 I've taken many courses but freeCodeCamp's course was the one which stuck. 
                 Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me 
                 the skills and confidence I needed to land my dream job as a software engineer at Spotify."
                </p>
            </div>
        </div>
    );
}

export default Testimonials;