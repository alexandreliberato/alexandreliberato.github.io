import React from 'react'
import full01 from '../assets/img/gallery/fulls/01.jpg'
import full02 from '../assets/img/gallery/fulls/02.jpg'
import full03 from '../assets/img/gallery/fulls/03.jpg'
import full04 from '../assets/img/gallery/fulls/04.jpg'
import full05 from '../assets/img/gallery/fulls/05.jpg'
import full06 from '../assets/img/gallery/fulls/06.jpg'
import full07 from '../assets/img/gallery/fulls/07.jpg'
import full08 from '../assets/img/gallery/fulls/08.jpg'
import full09 from '../assets/img/gallery/fulls/09.jpg'
import full10 from '../assets/img/gallery/fulls/10.jpg'
import thumb01 from '../assets/img/gallery/thumbs/01.jpg'
import thumb02 from '../assets/img/gallery/thumbs/02.jpg'
import thumb03 from '../assets/img/gallery/thumbs/03.jpg'
import thumb04 from '../assets/img/gallery/thumbs/04.jpg'
import thumb05 from '../assets/img/gallery/thumbs/05.jpg'
import thumb06 from '../assets/img/gallery/thumbs/06.jpg'
import thumb07 from '../assets/img/gallery/thumbs/07.jpg'
import thumb08 from '../assets/img/gallery/thumbs/08.jpg'
import thumb09 from '../assets/img/gallery/thumbs/09.jpg'
import thumb10 from '../assets/img/gallery/thumbs/10.jpg'
import pic01 from '../assets/img/pic01.jpg'
import college from '../assets/img/college.jpg'
import bvalue from '../assets/img/value.png'
import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const images01 = [
  {
    id: '1',
    source: full01,
    thumbnail: thumb01,
    caption: 'Photo 1',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
    landscape: true,
  },
  {
    id: '2',
    source: full02,
    thumbnail: thumb02,
    caption: 'Photo 2',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '3',
    source: full03,
    thumbnail: thumb03,
    caption: 'Photo 3',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '4',
    source: full04,
    thumbnail: thumb04,
    caption: 'Photo 4',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
    landscape: true,
  },
]

const images02 = [
  {
    id: '5',
    source: full05,
    thumbnail: thumb05,
    caption: 'Photo 5',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '6',
    source: full06,
    thumbnail: thumb06,
    caption: 'Photo 6',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '7',
    source: full07,
    thumbnail: thumb07,
    caption: 'Photo 7',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
    landscape: true,
  },
]

const images03 = [
  {
    id: '8',
    source: full08,
    thumbnail: thumb08,
    caption: 'Photo 8',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '9',
    source: full09,
    thumbnail: thumb09,
    caption: 'Photo 9',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '10',
    source: full10,
    thumbnail: thumb10,
    caption: 'Photo 10',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
    landscape: true,
  },
]

const IndexPage = () => (
  <Layout>
    <section className="intro">
      <header>
        <h1>Alexandre Liberato</h1>
        <p class="short-history">
          | Senior Software Engineer <br/>
          | Living at Curitiba/Brazil<br/>
          | Fintech team @ Contabilizei<br/>
          | Solving problems and creating solutions
        </p>
        <ul className="actions">
          <li>
            <a href="#first" className="arrow scrolly">
              <span className="label">Next</span>
            </a>
          </li>
        </ul>
      </header>
      <div className="content">
        <span className="image fill" data-position="center">
          <img src={pic01} alt="" />
        </span>
      </div>
    </section>

    <section id="first">
      <header>
        <h2>Bachelor of information systems</h2>
      </header>
      <div className="content">
        <p>
          <strong>It's a 4 years bachelor's degree</strong> that focuses on practical applications of technology to support organizations while adding value to their offerings. In order to apply technology effectively in this manner, a broad range of subjects are covered, such as communications, business, networking, software design, and mathematics.
        </p>
        <span className="image main">
          <img src={college} alt="" />
        </span>
      </div>
    </section>

    <section>
      <header>
        <h2>Tech Skills</h2>
      </header>
      <div className="content">
        <p>
          <strong>Roles & Skills</strong>
          <br/>
          - Determine operational feasibility by evaluating analysis,
          problem definition, requirements, solution development, and 
          proposed solutions.
          <br/>
          - Document and create flowcharts, layouts, diagrams, charts, 
          code comments and clear code.
        </p>
        <ul className="feature-icons">
          <li className="icon solid fa-laptop">Java</li>
          <li className="icon solid fa-bolt">Kotlin</li>
          <li className="icon solid fa-signal">Maven</li>
          <li className="icon solid fa-cog">Git</li>
          <li className="icon solid fa-map-marker-alt">Linux</li>
          <li className="icon solid fa-code">Google Cloud</li>
        </ul>
        <p>
        - Improve operations by conducting systems analysis also recommending 
        changes in procedures and process.
        <br/>
        - Update job knowledge by studying state-of-the-art development tools, programming 
        techniques and participating in events and educational opportunities.
        </p>
      </div>
    </section>

    <section>
      <header>
        <h2>Soft Skills</h2>
      </header>
      <div className="content">
        <p>
          <strong>About Me & Skills</strong>
          <br/>
          Love to study by myself, read books and write;
          I try to maintain my things always organized; Learning to play guitar and
          studying english. Always trying to improve on things that I like.
        </p>
        <ul className="feature-icons">
          <li className="icon regular fa-smile">Politeness</li>
          <li className="icon regular fa-comment">Communication</li>
          <li className="icon solid fa-signal">Support team management</li>
          <li className="icon solid fa-cog">Creative</li>
          <li className="icon solid fa-map-marker-alt">Proactive</li>
          <li className="icon solid fa-book-open">English</li>
        </ul>
      </div>
    </section>

    <section>
      <header>
        <h2>Vision</h2>
      </header>
      <div className="content">
        <p>
          <strong>Value First</strong>
          <br/>
          I think that among discussions about technology and philosifies, the customer is the focus and our
              paper is to bring quality and add business value for him.
        </p>

        <section>
          <div className="content">
            <img src={bvalue} alt="" width="90%" />
          </div>
        </section>
      </div>
    </section>

    <section>
      <header>
        <h2>Contact-me</h2>
      </header>
      <footer>
        <ul className="items">
          <li>
            <h3>Email</h3>
            <a href="alexandre@feiler.co">alexandre@feiler.co</a>
          </li>
          <li>
            <h3>Elsewhere</h3>
            <ul className="icons">
              <li>
                <a href="https://www.linkedin.com/in/alexandreliberato/" className="icon brands fa-linkedin-in">
                  <span className="label">LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/alexandreliberato" className="icon brands fa-github">
                  <span className="label">GitHub</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </footer>
    </section>

    <div className="copyright">
      &copy; Alexandre Liberato. All rights reserved. 
      <a href="https://html5up.net">HTML5 UP</a>.
    </div>
  </Layout>
)

export default IndexPage
