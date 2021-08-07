function Experience() {
  return (
    <>
      <h3 className="about-me-title">Work Experience</h3>
      {/* <!--company 1--> */}
      <div>
        <h4 className="profession-title">
          Full Stack Developer
          <span className="proffesion-company"> GoIt </span>
        </h4>
        <span className="proffesion-time">Kyiv, Ukraine</span>
        <ul className="profession-duties">
          <li className="profession-duties-item">HTML5, CSS3, SASS.</li>
          <li className="profession-duties-item">JavaScript.</li>
          <li className="profession-duties-item">React.js.</li>
          <li className="profession-duties-item">Node.js.</li>
        </ul>
      </div>
      {/* <!--company 2--> */}
      <div>
        <h4 className="profession-title">
          Chief economist
          <span className="proffesion-company"> ICK Group</span>
        </h4>
        <span className="proffesion-time">Kyiv, Ukraine</span>
        <ul className="profession-duties">
          <li className="profession-duties-item">
            Analysis of the economic and financial activities of the enterprise.
          </li>
          <li className="profession-duties-item">Cash flow.</li>
          <li className="profession-duties-item">Pricing.</li>
          <li className="profession-duties-item">Company budget.</li>
        </ul>
      </div>
      {/* <!--company 3--> */}
      <div>
        <h4 className="profession-title">
          Lead Economist
          <span className="proffesion-company">
            {" "}
            PJSC "Ventilation systems"
          </span>
        </h4>
        <span className="proffesion-time">Kyiv, Ukraine</span>
        <ul className="profession-duties">
          <li className="profession-duties-item">
            Supervision of the project "Comparative analysis of actual and
            planned costs".
          </li>
          <li className="profession-duties-item">Feasibility studies.</li>
          <li className="profession-duties-item">
            Comparative analysis of competitors' prices, analysis of
            non-competitive products.
          </li>
          <li className="profession-duties-item">
            Analysis of sales profitability.
          </li>
        </ul>
      </div>
      {/* <!--company 4--> */}
      <div>
        <h4 className="profession-title">
          Economist 2 cats
          <span className="proffesion-company">
            {" "}
            "UKRZALIZNITSIA" South-Western Railway Carriage Depot Bakhmach
          </span>
        </h4>
        <span className="proffesion-time">Bakhmach, Ukraine</span>
        <ul className="profession-duties">
          <li className="profession-duties-item">
            Analysis of the economic and financial activities of the enterprise.
          </li>
          <li className="profession-duties-item">
            Planning and analysis of sales volumes.
          </li>
          <li className="profession-duties-item">
            Calculation of the cost of production products
          </li>
          <li className="profession-duties-item">Pricing.</li>
        </ul>
      </div>
    </>
  );
}

export default Experience;
