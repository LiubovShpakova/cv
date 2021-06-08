import Foto from '../img/Liubov.jpg';
import Skill from './skills/skill';

const Sidebar = ({ techSkills, softskills, languages }) => {
  return (
    <>
      <aside className="sidebar">
        <img className="my-foto" src={Foto} alt="my foto" />
        <div className="contacts-container">
          <h3 className="contacts-container-title">Contacts</h3>
          <div>
            <span className="contacts-link-type">C:</span>
            <a className="contacts-link" href="tel:+38 096 259 06 36">
              {'  '}
              +38 096 259 06 36
            </a>
          </div>
          <div>
            <span className="contacts-link-type">E:</span>
            <a className="contacts-link" href="mailto:neworhideya@gmail.com">
              {'  '}
              neworhideya@gmail.com
            </a>
          </div>
          <div>
            <span className="contacts-link-type">in: </span>
            <a
              className="contacts-link"
              href="https://www.linkedin.com/in/liubov-shpakova-081053213/"
            >
              {'  '}
              liubov-shpakova-081053213
            </a>
          </div>
          <div>
            <span className="contacts-link-type">gh:</span>
            <a
              className="contacts-link"
              href="https://github.com/LiubovShpakova"
            >
              {'  '}
              https://github.com/LiubovShpakova
            </a>
          </div>
        </div>
        <div className="Skills-conteiner">
          <h3 className="Skills-title">Tech Skills</h3>
          <ul>
            {techSkills.map((skill) => (
              <Skill key={skill.id} name={skill.name} />
            ))}
          </ul>
        </div>
        <div className="Skills-conteiner">
          <h3 className="Skills-title">Soft Skills</h3>
          <ul>
            {softskills.map((skill) => (
              <Skill key={skill.id} name={skill.name} />
            ))}
          </ul>
        </div>
        <div className="Skills-conteiner">
          <h3 className="Skills-title">Language</h3>
          <ul>
            {languages.map((skill) => (
              <Skill key={skill.id} name={skill.name} />
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
