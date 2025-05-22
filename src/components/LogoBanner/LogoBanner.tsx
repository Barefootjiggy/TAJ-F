import "./LogoBanner.css";

const LogoBanner = () => {
  return (
    <header className="logobanner-wrapper" role="banner">
      <div className="logo-container">
        <img 
        src="/logos/ForeverFit05.webp" 
        alt="Forever Fitness Logo" 
        width="250" 
        height="100" 
        className="logo-img" 
        />
      </div>
    </header>
  );
};

export default LogoBanner;
