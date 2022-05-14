import "./appSidebar.scss";
import gardenLogo from "assets/sidebar_icon/Garden_logo.svg";
import socialIconInst from "assets/sidebar_icon/instagram.svg";
import IQdev from "assets/sidebar_icon/IQ_dev.svg";
import blogNav from "assets/sidebar_icon/uil-document-layout-left.svg";
import gardenNav from "assets/sidebar_icon/uil-polygon.svg";
import socialIconComments from "assets/sidebar_icon/uil_comments-alt.svg";
import socialIconVK from "assets/sidebar_icon/vk.svg";

const AppSidebar = () => {
    return (
      <header className="app__sidebar sidebar">
        <div className="sidebar__top">
          <a href="/#" className="sidebar__icon-box">
            <img src={ gardenLogo } alt="gardenLogo" />
          </a>
          <nav className="sidebar__nav nav-sidebar">
            <div className="nav-sidebar__item">
              <div className="nav-sidebar__icon-box">
                <img src={ gardenNav } alt="gardenNav" />
              </div>
              <span className="nav-sidebar__text">Garden</span>
            </div>
            <div className="nav-sidebar__item">
              <div className="nav-sidebar__icon-box">
                <img src={ blogNav } alt="blogNav" />
              </div>
              <span className="nav-sidebar__text">Блог</span>
            </div>
          </nav>
        </div>
        <div className="sidebar__bottom">
          <ul className="sidebar__icons social-icons">
            <li className="social-icons__box">
              <a href="/#" className="social-icons__icon">
                <img src={ socialIconInst } alt="socialIconInst" />
              </a>
            </li>
            <li className="social-icons__box">
              <a href="/#" className="social-icons__icon">
                <img src={ socialIconVK } alt="socialIconVK" />
              </a>
            </li>
            <li className="social-icons__box">
              <a href="/#" className="social-icons__icon">
                <img src={ socialIconComments } alt="socialIconComments" />
              </a>
            </li>
          </ul>
          <div className="sidebar__IQ-logo-box">
            <a href="/#" className="social-icons__icon">
              <img src={ IQdev } alt="IQdev" />
            </a>
          </div>
        </div>
      </header>
    );
};

export default AppSidebar;
