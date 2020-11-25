import {ProjectItems} from './ProjectItems';
import './projects.css';

export default function Projects() {
    return (
        <section id="projects">
            <h1 className="section-title">My previous projects</h1>
            <div className="project-grid">
                {ProjectItems.map((item, index) => {
                    return (
                        <ProjectCard key={index} title={item.title} sub={item.sub} description={item.description} images={item.images} />
                    )
                })}    
            </div>
        </section>
    );
}

function ProjectCard(props) {
    return (
        <div className="project-card">
            <strong className="project-card-title">{props.title}</strong>
            <p className="project-card-sub">{props.sub}</p>
            <p className="project-card-description">{props.description}</p>   
        </div>
    );
}