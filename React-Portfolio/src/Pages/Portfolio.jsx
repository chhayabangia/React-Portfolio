import Project from '../components/Project';

const projects = [
  {
    title: 'Emp Tracker',
    image: '/Users/karanbangia/React-Portfolio/React-Portfolio/Public/Emp Tracker.jpg',
    deployed: 'https://project-one.netlify.app',
    repo: 'https://github.com/chhayabangia/Employee-Manager.git'
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2>My Work</h2>
      <div className="project-grid">
        {projects.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>
    </section>
  );
}