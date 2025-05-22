import "./LogoBanner.css";

const LogoBanner = () => {
  return (
    <nav className="logobanner-wrapper" role="banner">
      <div className="logo-container">
        <img 
        src="/ForeverFit05.webp" 
        alt="Forever Fitness Logo" 
        width="250" 
        height="100" 
        className="logo-img" 
        />
      </div>
    </nav>
  );
};

export default LogoBanner;
