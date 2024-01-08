export const HomePage = () => {
  return (
    <div id="HomePage">
      <div className="left">
        <div className="logo">
          <img className="Hlogo" src="./assets/HeaderLogo.png" alt="truck" />
        </div>
        <div className="left-body">
          <div className="intro-text">
            <p className="blue-text">Discover the</p>
            <div className="two-color-text">
              <p className="red-text"> Best</p>
              <p className="blue-text">
                Food <span className="mob">and</span>
              </p>
            </div>
            <p className="blue-text">
              {' '}
              <span className="lap">and</span> Drinks
            </p>
          </div>

          <div className="small-text">
            <p>
              Naturally made Healthcare Products for the better care & support
              of your body.
            </p>
          </div>
          <button className="H-btn" style={{ cursor: 'pointer' }}>Explore Now!</button>
        </div>
      </div>
      <div className="right">
        <img className="Headerpizza" src="./assets/pizza.png" alt="pizza" />
        <button className="getInTouch-btn" style={{ cursor: 'pointer' }}>Get In Touch</button>

        <svg
          className="svg-red"
          xmlns="http://www.w3.org/2000/svg"
          width="752"
          height="839"
          viewBox="0 0 752 839"
          fill="none"
        >
          <path
            d="M111.512 36.3371C40.9348 45.1719 7.76349 15.7936 0 0L752 1.42498V835.396C484.285 867.417 547.679 676.51 560.03 640.173C572.381 603.836 657.779 365.152 547.679 190.591C437.579 16.031 199.733 25.2934 111.512 36.3371Z"
            fill="#E23744"
          />
        </svg>
      </div>
    </div>
  );
};
