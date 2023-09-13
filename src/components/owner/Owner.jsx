import React from 'react'
import Navbar from '../navbar/Navbar';

function Owner() {
  return (
    <div className='owner'>
        <Navbar />
        <div>
            <h1>Nathawut - Group J - 22</h1>
            <img src='./my_profile_pic.jpg' alt='profile-pic' width='200px' height='200px' />
            <h3>Short Biography</h3>
            <p>I am an accomplished tech enthusiast and aviation veteran with a
Bachelor's Degree and Generation Thailand’s software developer
certification. Applied keen attention to detail in airline safety
practices. Diverse background enriched by global travels,
meditation, and volunteerism. Skillful in language, leadership, and
impactful presentations. Commended for counseling, empathy, and
adept team leadership. Seeking to apply QA expertise and a global
perspective at TikTok, embracing its dynamic culture and visionary
ethos. Excited to merge skills in technology and service to drive
positive contributions and growth within the team.</p>
        </div>
    </div>
  )
}

export default Owner;