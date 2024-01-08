export const AboutPage = () => {
  return (
    <div className="aboutPage">
      <div className="centerDisplay">
        <img className="aboutImg" src="./assets/About-img.png" alt="" />
        <div className="aboutText-btn">
          <p className="aboutTitle">About Us</p>
          <p className="aboutText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </p>
          <button className="aboutBtn H-btn" style={{ cursor: 'pointer' }}>Read More</button>
        </div>
      </div>
    </div>
  );
}