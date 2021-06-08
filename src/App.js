import Sidebar from './components/Sidebar';
import techSkills from './components/skills/techskills.json';
import softskills from './components/skills/softskills.json';
import languages from './components/skills/languages.json';
import Info from './components/Info';
import Projects from './components/Projects';
import projectsItem from './components/projects/projects-item.json';
import Education from './components/Education';
import educItems from './components/education/educationItem.json';
import Experience from './components/Experience';
import './index.css';

function App() {
  return (
    <div className="wrapper">
      <Sidebar
        techSkills={techSkills}
        softskills={softskills}
        languages={languages}
      />
      <div className="about-me-conteiner">
        <Info />
        <Projects projects={projectsItem} />
        <Education educationItems={educItems} />
        <Experience />
      </div>
    </div>
  );
}

export default App;
