import Project from '../components/Project';

const projects = [
  {
    title: 'Project One',
    image: '/project1.png',
    deployed: 'https://project-one.netlify.app',
    repo: 'https://github.com/yourname/project-one'
  },
  // Add 5 more
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