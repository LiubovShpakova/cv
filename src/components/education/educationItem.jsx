// import PropTypes from 'prop-types';

const EducationItem = ({ title, profession, time, place }) => {
  return (
    <li>
      <h4 className="education-title">{title}</h4>
      <h5 className="profession-title-education">{profession}</h5>
      <span className="proffesion-time">
        {time}
        <span className="profession-devider">|</span> {place}
      </span>
    </li>
  );
};

// EducationItem.propTypes = {
//   title: PropTypes.string.isRequired,
//   profession: PropTypes.string.isRequired,
//   time: PropTypes.string.isRequired,
//   place: PropTypes.string.isRequired,
// };
export default EducationItem;
