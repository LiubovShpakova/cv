import PropTypes from 'prop-types';

const Skill = ({ name }) => {
  return (
    <li className="Skills-Item">
      <span className="Skills-text">{name}</span>
    </li>
  );
};

Skill.propTypes = {
  name: PropTypes.string,
};
export default Skill;
