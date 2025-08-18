// src/components/About/About.jsx
import { HardDrive, Palette, Zap, Heart } from 'lucide-react';
import './About.css';
import Profile from "../../assets/images/hime.jpg";

function About() {
  const skills = [
    { name: '10TB Loli Porn Saved', icon: <HardDrive size={24} />, color: '#3b82f6' },
    { name: 'Professional Loli Artist', icon: <Palette size={24} />, color: '#10b981' },
    { name: 'Performance Raping', icon: <Zap size={24} />, color: '#f59e0b' },
    { name: 'Sophisticated Cunny Lover', icon: <Heart size={24} />, color: '#ef4444' }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="about-description">
              The hardest, strongest penis, smartest brain, most masculine face, hunter’s eyes, powerful jaw, and strongest body.
               <br />
              —— Golden Asian Men are born as gods.
            </p>
            <p className="about-description">
              From 221 BCE to 1644 CE, China led the world for almost 2,000 years—always at the top. As a Han Chinese, I take pride in that.

              Attila the Hun crushed the Roman Empire, and the Han army struck fear into white men.

              Genghis Khan’s Mongols conquered most of Europe and Asia.

              In WWII, 30,000 Japanese soldiers defeated over 100,000 British troops 🇯🇵

              Chinese forces defeated armies from 17 nations, including the most powerful American troops in the Korean War 🇨🇳
              
            </p>
            <p className="about-description">
              —— For over 2,000 years, Golden Asian Men have been at the pinnacle of human civilization.

              It’s our duty to protect women from evil white men 💪💪
            </p>
            
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div 
                    className="skill-icon"
                    style={{ backgroundColor: skill.color + '20', color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <a href="/resume.pdf" className="btn-primary" download>
                Download Resume
              </a>
              <button 
                className="btn-secondary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <div className="placeholder-content">
                <img src={Profile} alt="Profile"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;