import styled from 'styled-components';
import '../App.css';
import { dummyProjects } from '../static/dummyData';

const ProjectArea = styled.div`
  margin: 0 30px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;

  .project:nth-child(1) {
    grid-column: 1 / span 3;
  }

  .project:nth-child(2) {
    grid-column: 4 / span 2;
  }
  
  .project:nth-child(3) {
    grid-column: 1 / span 2;
  }

  .project:nth-child(4) {
    grid-column: 3 / span 3;
  }

  @media only screen and (max-width: 991px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Project = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  .project-img {
    height: 460px;
    margin: 0 0 40px;
    object-fit: cover;
    transition: 0.3s;
  }

  .project-img:hover {
    opacity: 0.5;
    cursor: pointer;
    transition: 0.3s;
  }
  .project-title {
    font-size: 20px;
    margin-bottom: 15px;
  }

  .project-title:hover {
    color: #7D7E7F;
    cursor: pointer;
  }

  .project-content {
    font-size: 16px;
    margin-bottom: 60px;
    color: #7D7E7F;
  }

`;



const Projects = () => {
  return (
    <>
      <ProjectArea>
      {dummyProjects.map((project) => {
        return (
          <Project className='project'>
            <img className='project-img' alt={project.title} src={project.picture}></img>
            <p className='project-title'>{project.title}</p>
            <p className='project-content'>{project.content}</p>
          </Project>
        )
      })}
      </ProjectArea>
    </>
  );
};

export default Projects;