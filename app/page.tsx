import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="About-Me">
        <h2>About Me</h2>
        <div className='link-icons'>
          <a href='#' target='_blank' rel='noreferrer'></a>
          <a href='#' target='_blank' rel='noreferrer'></a>
          <a href='#' target='_blank' rel='noreferrer'></a>
          <a href='#' target='_blank' rel='noreferrer'></a>
          <a href='#' target='_blank' rel='noreferrer'></a>
        </div>
        <div className='about-content'>
          <p>[Replace with Text]</p>
          <p>[Replace with Text]</p>
        </div>
      </section>
      <div>
        <Link href='/projects' className="block md:hidden">Projects</Link>
        <Link href='#' className="block md:hidden">Resume</Link>
      </div>
    </main>
  );
}
