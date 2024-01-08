export const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-img" src="./assets/FooterLogo.png" alt="truck" />
      <div className="fdivision">
        <p className="fTitle">Contact Us</p>
        <div className="subPoints">
          <p>
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </p>
          <p>example2020@gmail.com</p>
          <p>(904) 443-0343</p>
        </div>
      </div>

      <div className="fdivision">
        <p className="fTitle">More</p>
        <div className="subPoints">
          <p>About Us</p>
          <p>Products</p>
          <p>Career</p>
          <p>Contact Us</p>
        </div>
      </div>

      <div className="flink-copy">
        <div className="linkAndMore">
          <p className="social fTitle">Social Links</p>
          <div className="links">
            <img src="./assets/insta.png" alt="instagram" style={{ cursor: 'pointer' }} />
            <img src="./assets/twitter.png" alt="twitter" style={{ cursor: 'pointer' }}  />
            <img src="./assets/fb.png" alt="facebook" style={{ cursor: 'pointer' }}  />
          </div>
        </div>

        <div className="copyright">
          <p>© 2022 Food Truck Example</p>
        </div>
      </div>
    </div>
  );
}