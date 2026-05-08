import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import WordCloud from './wordcloud'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const skillsArray = 'Skills'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
          </h1>
          <p>
            I have a strong foundation in both frontend and backend development,
            with a specialized focus on AI/ML and DevOps. My technical arsenal
            includes Python, TypeScript, and C++, along with frameworks like
            FastAPI, React, and Node.js.
          </p>
          <p align="LEFT">
            I'm particularly interested in scalable AI infrastructure,
            reinforcement learning, and generative models. I also have
            significant experience with cloud platforms like AWS and GCP, as
            well as containerization tools like Docker and Kubernetes.
          </p>
          <p>
            Visit my <a href="https://linkedin.com/in/mahakagarwal" target="_blank" rel="noreferrer" style={{color: '#00ffa3', textDecoration: 'none'}}>LinkedIn</a> profile for more details or just <a href="/contact" style={{color: '#00ffa3', textDecoration: 'none'}}>contact</a> me.
          </p>
        </div>

        <div className="logos-container">
          <WordCloud />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
