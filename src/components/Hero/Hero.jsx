import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Olá 👋, eu sou o '}{' '}
            <span className="text-color-main">{name || 'Leonardo Said'}</span>
            <br />
            {subtitle || 'Um desenvolvedor Full Stack.'}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Sobre'}
              </Link>
            </span>

            <span className="cta-btn cta-btn--hero" style={{ marginLeft: 8 }}>
              <Link to="projects" smooth duration={1000}>
                {cta || 'Projetos'}
              </Link>
            </span>

            <span className="cta-btn cta-btn--hero" style={{ marginLeft: 8 }}>
              <Link to="contact" smooth duration={1000}>
                {cta || 'Contato'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
