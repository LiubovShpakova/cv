import PropTypes from 'prop-types';
function Education({ educationItems }) {
  return (
    <>
      <div>
        <h3 className="about-me-title">Education</h3>
        {educationItems.map((item) => (
          <div>
            <h4 className="education-title">{item.title}</h4>
            <h5 className="profession-title-education">{item.profession}</h5>
            <span className="proffesion-time">
              {item.time}
              <span className="profession-devider"> | </span> {item.place}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
Education.propTypes = {
  educationItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      profession: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Education;
