import { HeaderBg, Logo } from "@/assets";
import { useNavigate } from "react-router-dom";
import style from './Header.module.scss'
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={style.header}>
{/* <img className={style.headerBottomItem} src={HeaderBg}/> */}

    <div className={style.navbar}>
      {/* Logo */}
      <img 
        src={Logo}
        alt="Logo" 
        className={style.logo} 
        onClick={() => navigate('/home')}
      />
      {/* Desktop Navigation */}
      <nav className={style.navLinks}>
        <ul className={style.navList}>
        <li className={style.mobileNavItem} onClick={() => navigate('/home')}>Games</li>
            <li onClick={() => navigate('/kids-videos')} className={style.mobileNavItem}>Kids Videos</li>
            <li onClick={() => navigate('/kids-blog')} className={style.mobileNavItem}>Kids Blog</li>
            <li onClick={() => navigate('/about-us')} className={style.mobileNavItem}>About us</li>
            <li onClick={() => navigate('/contact-us')} className={style.mobileNavItem}>Contact Us</li>
        </ul>
      </nav>

      {/* Hamburger Menu Icon */}
      <img 
        src="https://kidemy.com/_next/image?url=%2Fimages%2FHamburger%20Menu.webp&w=1080&q=75" 
        alt="Hamburger Menu Icon" 
        className={style.hamburger} 
        onClick={() => setIsMobileMenuOpen(true)} 
      />
    </div>

    {/* Mobile Menu */}
    <div className={`${style.mobileMenu} ${isMobileMenuOpen ? style.open : ""}`}>
      <div className={style.mobileMenuContent}>
        {/* Close Icon */}
        <div className={style.closeIcon}>
          <img 
            src="/images/Close.webp" 
            alt="Close Menu Icon" 
            className={style.closeIconImg} 
            onClick={() => setIsMobileMenuOpen(false)} 
          />
        </div>

        {/* Mobile Navigation */}
        <nav className={style.mobileNav}>
          <ul className={style.mobileNavList}>
            <li className={style.mobileNavItem}>Games</li>
            <li onClick={() => navigate('kids-videos')} className={style.mobileNavItem}>Kids Videos</li>
            <li onClick={() => navigate('kids-blog')} className={style.mobileNavItem}>Kids Blog</li>
            <li onClick={() => navigate('about-us')} className={style.mobileNavItem}>About us</li>
            <li onClick={() => navigate('contact-us')} className={style.mobileNavItem}>Contact Us</li>
          </ul>
        </nav>
      </div>
    </div>

    {/* Bottom Banner */}
    <img 
      src={HeaderBg}
      alt="Menu Icon" 
      className={style.bottomBanner} 
    />
  </header>
  );
};

export default Header;
