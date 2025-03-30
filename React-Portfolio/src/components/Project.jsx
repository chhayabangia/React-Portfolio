export default function Project({ title, image, deployed, repo }) {
    return (
      <div className="project-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>
          <a href={deployed} target="_blank">Live</a> | 
          <a href={repo} target="_blank"> GitHub</a>
        </p>
      </div>
    );
  }