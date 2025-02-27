import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './base.css'
import Header from './header.jsx'
import HeroBanner from './hero-banner.jsx'
import OverView from './overview.jsx'
import App from './App.jsx'
import TechStack from './tech-stack.jsx'
import Experience from './experience.jsx'
import ProjectsRfm from './projects-rfm.jsx'
import Footer from './footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header />
    <HeroBanner />
    <OverView />
    <TechStack />
    <ProjectsRfm/>
    <Experience/>
    <Footer/>
  </StrictMode>
)
