import React from 'react'
import './projects.css';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main>
      <section className='projects-info'>
        <div className='project-cards'>
          <div className='card'>
            <div className=''></div>
            <div className='project-details'>
              <p>Band Geeks News App</p>
              <p>A personal news app developed with <Link href='https://redwoodjs.com/docs/introduction' target='_blank' rel='noreferrer'>RedwoodJS</Link> and TailwindCSS.</p>
            </div>
          </div>
          <div className='card'>
            <div className=''></div>
            <div className='project-details'>
              <p>Court Notice Translation Service (Fall 2023 Prototype)</p>
              <p>Translates NJ Court Notices into a selection of languages. Developed using <Link href='https://docs.pega.com/bundle/platform/page/platform/app-dev/dev-studio-overview.html' target='_blank' rel='noreferrer'>Pega Dev Studio</Link> and <Link href='https://docs.aws.amazon.com/translate/latest/APIReference/API_TranslateDocument.html' target='_blank' rel='noreferrer'>AWS Translate API</Link></p>
            </div>
          </div>
          <div className='card'>
            <div className=''></div>
            <div className='project-details'>
              <p>SeanVGO</p>
              <p>A video game collection organizer developed using React.js, vanilla CSS, and <Link href='https://firebase.google.com/docs/firestore' target='_blank' rel='noreferrer'>Cloud Firestore</Link>.</p>
            </div>
          </div>
          <div className='card'>
            <div className=''></div>
            <div className='project-details'>
              <p>Fanmade Fallout 4 Game Guide</p>
              <p>A fanmade Fallout 4 game guide developing using React.js and vanilla CSS. (Work-In-Progress)</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
