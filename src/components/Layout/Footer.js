import "./Footer.scss";
import Logo from "../../assets/img/logo-green-1x.png";
const Footer = () => {
  return (
    <section className="footer">
      <div className="footer--logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="footer--content">
        <nav className="footer--content__links">
          <ul>
            <li>
              <a href="#!">Company</a>
            </li>
            <li>
              <a href="#!">Contact Us</a>
            </li>
            <li>
              <a href="#!">Careers</a>
            </li>
            <li>
              <a href="#!">Privacy Policy</a>
            </li>
            <li>
              <a href="#!">Terms</a>
            </li>
          </ul>
        </nav>
        <div className="footer--creater__message">
          <h3>
            Built by Shashank. I made this site using React and inspired from
            Jonas Schmedtaan's Work. Tried to this website completely by myself.
          </h3>
        </div>
      </div>
    </section>
  );
};
export default Footer;
