import { useState } from "react";
import "./App.css";

// ✏️ CHANGE THESE TO YOUR REAL INFO
const EMAIL = "kenlloydalcoreza24@gmail.com";
const SOCIALS = [
  { label: "YouTube", url: "" },
  { label: "Instagram", url: "" },
  { label: "Facebook", url: "" },
]; // leave url "" and that button is hidden
const tools = [
  { name: "Adobe Premiere Pro", use: "Main editing" },
  { name: "Adobe After Effects", use: "Motion graphics & effects" },
  { name: "DaVinci Resolve", use: "Color grading" },
  { name: "CapCut", use: "Short-form & quick edits" },
];
const videos = [
  { id: "0IPwauyTUQI", title: "Debut Highlight Film", category: "HIGHLIGHT EDIT", description: "A cinematic highlight edit cut for emotion, pacing, and music, turning a full event into a story worth rewatching." },
  { id: "Tq91HTAyLqs", title: "Promo Edit", category: "PROMO EDIT", description: "A fast, polished promotional edit built to grab attention and communicate the message clearly." },
  { id: "pS4tRSdv_UA", title: "Short-Form Hooks", category: "SHORT-FORM EDIT", description: "Scroll-stopping hooks and tight cuts designed for retention on short-form platforms." },
  { id: "a6O9w7slpKE", title: "Pre-Debut Teaser", category: "TEASER EDIT", description: "A teaser edit that builds anticipation with rhythm, transitions, and sound design." },
];


function VideoCard({ video, index }) {
  return (
    <article className="video-card">
      <div className="video-frame">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}`}
          title={video.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <div className="video-meta"><span>{video.category}</span><span>0{index + 1}</span></div>
      <h3>{video.title}</h3>
      <p className="muted">{video.description}</p>
      <a className="video-link" href={`https://youtu.be/${video.id}`} target="_blank" rel="noreferrer">WATCH ON YOUTUBE ↗</a>
    </article>
  );
}

function App() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy my email:", EMAIL);
    }
  };

  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent("Video editing project")}`;

  return (
    <>
      <nav className="nav">
        <a href="#home" className="logo" aria-label="Back to home">Ken Lloyd Alcoreza<span>.</span></a>
        <div className="nav-links">
          <a href="#work">WORK</a><a href="#about">ABOUT</a><a href="#contact">HIRE ME</a>
        </div>
      </nav>
      <main>
        <section className="hero" id="home">
          <div className="hero-glow" />
          <img className="hero-photo" src="/ken.jpg" alt="Ken Lloyd, video editor" />
          <p className="eyebrow">VIDEO EDITOR · AVAILABLE FOR HIRE</p>
          <h1>I EDIT<br /><span>STORIES.</span></h1>
          <p className="intro">I'm a video editor who turns raw footage into polished videos, with sharp pacing, strong sound, and clean color that keep people watching.</p>
          <div className="hero-actions">
            <a className="button" href="#work">WATCH MY EDITS ↘</a>
            <a className="text-link" href="#contact">HIRE ME FOR YOUR PROJECT ↗</a>
          </div>
          <div className="hero-index">VIDEO EDITOR · HIGHLIGHTS · PROMOS · SHORT-FORM</div>
        </section>

        <section className="section" id="work">
          <div className="section-head">
            <div><p className="eyebrow">SELECTED EDITS / 01</p><h2>THE WORK<span>.</span></h2></div>
            <p className="muted section-note">Highlight films, promos, and short-form edits.</p>
          </div>
          <div className="video-grid">{videos.map((video, index) => <VideoCard key={video.id} video={video} index={index} />)}</div>
        </section>

        <section className="about section" id="about">
          <p className="eyebrow">ABOUT ME / 02</p>
          <h2>BEHIND<br/>THE <span>EDIT.</span></h2>
          <p className="about-copy">I'm a video editor focused on turning footage into videos people remember. Whether it's a long highlight film, a promo, or short-form content built for retention, I care about rhythm, sound, and the small details that make an edit feel professional. I also shoot video and photos, so I know what makes footage easy to cut.</p>
          <div className="specialties"><span>VIDEO EDITING</span><span>HIGHLIGHT FILMS</span><span>PROMO VIDEOS</span><span>SHORT-FORM / REELS</span><span>COLOR GRADING</span><span>SOUND & MUSIC</span></div>
          <p className="eyebrow tools-title">SOFTWARE I USE</p>
            <div className="tools">
              {tools.map((t) => (
                <div className="tool" key={t.name}>
                  <strong>{t.name}</strong>
                  <span>{t.use}</span>
                </div>
              ))}
            </div>
        </section>

        <section className="contact section" id="contact">
          <p className="eyebrow">HIRE ME / 03</p>
          <h2>NEED AN<br/><span>EDITOR?</span></h2>
          <p className="muted contact-copy">Available for video editing, event highlights, promos, and short-form content. Send me your project details and deadline.</p>
          <div className="contact-actions">
            <a className="button" href={`mailto:${EMAIL}?subject=${encodeURIComponent("Video editing project")}`}>EMAIL ME ↗</a>
            <a className="button outline" href={gmail} target="_blank" rel="noreferrer">OPEN IN GMAIL ↗</a>
            <button className="button outline" type="button" onClick={copyEmail}>{copied ? "COPIED ✓" : "COPY EMAIL"}</button>
          </div>
          <p className="email-text">{EMAIL}</p>
          {SOCIALS.some((s) => s.url) && (
            <div className="socials">
              {SOCIALS.filter((s) => s.url).map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer">{s.label.toUpperCase()} ↗</a>
              ))}
            </div>
          )}
        </section>
      </main>
      <footer>
        <a href="#home" className="logo">Ken Lloyd Alcoreza<span>.</span></a>
        <p>© {new Date().getFullYear()} · VIDEO EDITOR PORTFOLIO</p>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}
export default App;