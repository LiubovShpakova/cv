import Project from './projects/project';
const Projects = ({ projects }) => {
  return (
    <>
      <div>
        <div className="projects-conteiner">
          <h3 className="about-me-title">Team projects</h3>
          <ol>
            {projects.map(
              (pro) =>
                !pro.isMy && (
                  <Project
                    key={pro.id}
                    name={pro.name}
                    link={pro.link}
                    techName={pro.techName}
                    role={pro.role}
                  />
                )
            )}
          </ol>
          <h3 className="about-me-title">My projects</h3>
          <ol>
            {projects.map(
              (pro) =>
                pro.isMy && (
                  <Project
                    key={pro.id}
                    name={pro.name}
                    link={pro.link}
                    techName={pro.techName}
                    role={pro.role}
                  />
                )
            )}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Projects;
