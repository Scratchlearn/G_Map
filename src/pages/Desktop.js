import TitleFrame from "../components/TitleFrame";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop">
      <section className="navbar">
        <div className="bg" />
        <img
          className="graviti-logo-1"
          loading="eager"
          alt=""
          src="/graviti-logo-1@2x.png"
        />
      </section>
      <div className="title">
        <h3 className="typography-subtitle-lg-semi-container">
          <span>{`Let's calculate `}</span>
          <span className="distance">{`distance `}</span>
          <span>from Google maps</span>
        </h3>
      </div>
      <TitleFrame />
    </div>
  );
};

export default Desktop;
