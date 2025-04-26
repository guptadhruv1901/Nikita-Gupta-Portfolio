import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'

const About = () => {
  return (
    <div className="about">
      <div className="about-con">
        <div className="mainimg"><img src={assets.about1} alt="" /></div>
        
        <div className="about-content">
            <h1>Nice To Meet You !</h1>
            <p>
                I'm Nikita Gupta, a passionate digital graphic designer from India with a background in Art & Design. I thrive on creating innovative designs and exploring new creative avenues. Embracing challenges with critical thinking, I develop design solutions that effectively address problems.<br/><br/>

                My affinity for design sprints and transforming ideas into impactful visual pieces inspired my transition from manual painting to digital design. This shift allows me to harness technology to bring my creative visions to life more efficiently and dynamically.<br/><br/>

                The fact that I have an affinity for design sprints and putting ideas into a impactful design pieces, is why I transitioned from painting manually, to designing digital ones! I believe that in the ever-evolving digital landscape, it's essential to experiment and explore adjacent fields, embodying the philosophy of being a "jack of all trades and master of one." This mindset motivates me to wear many hats, ensuring versatile and comprehensive design solutions.<br/><br/>

                My aim is to continuously expanding my skill set to deliver exceptional and meaningful design solutions.
            </p>
            <button><a href={assets.CV} download>Download Resume</a></button>
        </div>
      </div>
        <div className="row-flex">
          <div className="section edu">
            <h1 className="heading">
              EDUCATION
            </h1>
            <div className="edu-container">
              <div className="institution">
                <div className="ins">
                  <h4>Amity University</h4>
                  <h4>(Noida)</h4>
                  <h5>2020 - 2022</h5>
                </div>
                <div className="ins">
                  <h4>Amity University</h4>
                  <h4>(Lucknow)</h4>
                  <h5>2016 - 2020</h5>
                </div>
                <div className="ins">
                  <h4>S.S.M.V.</h4>
                  <h4>(Shahjahanpur)</h4>
                  <h5>2015 - 2016</h5>
                </div>
                <div className="ins">
                  <h4>S.P.G.I.C.</h4>
                  <h4>(Shahjahanpur)</h4>
                  <h5>2013 - 2014</h5>
                </div>
              </div>
              <div className="timeline">
                <div className="points"></div>
                <div className="points"></div>
                <div className="points"></div>
                <div className="points"></div>
              </div>
              <div className="degree">
                <div className="deg">
                  <h3>MASTERS OF FINE ARTS</h3>
                  <p>(Visual Communication)</p>
                </div>
                <div className="deg">
                  <h3>BACHELORS OF FINE ARTS</h3>
                  <p>(Painting)</p>
                </div>
                <div className="deg">
                  <h3>SENIOR SCHOOL CERTIFICATION EXAMINATION</h3>
                  <p>Class XII(CBSE)</p>
                </div>
                <div className="deg">
                  <h3>SECONDARY SCHOOL EXAMINATION</h3>
                  <p>Class X(State Board)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="section technical">
            <h1 className="heading">
              TECHNICAL CAPABILITIES
            </h1>
            <div className="tech-items">
              <div className="tech-item">
                <h4>Adobe Photoshoot</h4>
              </div>
              <div className="tech-item">
                <h4>Adobe Animate</h4>
              </div>
              <div className="tech-item">
                <h4>Adobe Illustrator</h4>
              </div>
              <div className="tech-item">
                <h4>Adobe Premier Pro</h4>
              </div>
              <div className="tech-item">
                <h4>Adobe XD</h4>
              </div>
              <div className="tech-item">
                <h4>Adobe </h4>
              </div>
              <div className="tech-item">
                <h4>Procreate</h4>
              </div>
              <div className="tech-item">
                <h4>Adobe After Effects</h4>
              </div>
              <div className="tech-item">
                <h4>Microsoft Office Suite</h4>
              </div>
              <div className="tech-item">
                <h4>Figma</h4>
              </div>
              <div className="tech-item">
                <h4>Canva</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="section exp">
          <h1 className="heading">
            EXPERIENCES
          </h1>
          <div className="exp-container">
            <div className="exp-item-row">
              <div className="exp-item">
                <div className="info">
                  <h2>JOBS</h2>
                  <div className="job-item">
                    <div className="job-info">
                      <h4>Associate Graphic Designer</h4>
                      <h4>Mad Influence, Noida</h4>
                      <p>In 2023 - Present</p>
                    </div>
                  </div>
                  <div className="job-item">
                    <div className="job-info">
                      <h4>Graphic Designer</h4>
                      <h4>Apollo 24/7, Gurugram</h4>
                      <p>In 2022 - 2023</p>
                    </div>
                  </div>
                  <div className="job-item">
                    <div className="job-info">
                      <h4>Graphic Designer</h4>
                      <h4>Social Cracker, Kolkata</h4>
                      <p>In 2021</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="exp-item">
                <div className="info">
                  <h2>SUMMER INTERNSHIPS</h2>
                  <div className="job-item">
                    <div className="job-info">
                      <h4>Graphic Design Intern</h4>
                      <p>In 2021 - Chirpn IT Solutions,</p>
                      <p>Pune</p>
                    </div>
                  </div>
                  <div className="job-item">
                    <div className="job-info">
                      <h4>Illustration & Digital Art</h4>
                      <p>In 2018 - At Om Books International,</p>
                      <p>Noida</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="exp-item-row">
              <div className="exp-item">
                <div className="info">
                  <h2>EXHIBITIONS</h2>
                  <div className="job-item">
                    <div className="job-info">
                      <h4>Kala Darpan National Exhibition</h4>
                      <p>In 2019 - Coordinated the exhibition in the college.</p>
                      <p>In 2017 - Participated with my selected work.</p>
                    </div>
                  </div>
                  <div className="job-item">
                    <div className="job-info">
                      <h4>Expressions Art Exhibition</h4>
                      <p>In 2016 - Participated with my selected work.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="exp-item">
                <div className="info">
                  <h2>CULTURAL PARTICIPATIONS</h2>
                  <div className="job-item">    
                     <div className="job-info">
                      <h4>Amiphoria - Amity Annual Fest</h4>
                      <p>In 2020 - Participated in modelling/ ramp walk and represented Amity School of Fashion Technology.</p>
                      <p>In 2019 - Performed with college dance crew.</p>
                      <p>In 2017 - Performed at the Inaugural ceremony.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About