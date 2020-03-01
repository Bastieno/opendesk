import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import PropTypes from 'prop-types';

class CustomControls extends React.Component {
  renderSlidesNumbers(currentSlideIndex) {
    const homepageSections = ['HOME', 'SERVICES', 'PRODUCTS', 'PROJECTS', 'PARTNERS', 'CONTACT'];
    const { slidesCount, scrollToSlide } = this.props;
    const slidesNumbers = [];
    for (let i = 0; i < slidesCount; i++) {
      const sideBarMenuProps = {
        active: (currentSlideIndex === i).toString(),
        key: i,
        onClick: () => scrollToSlide(i),
      };
      slidesNumbers.push(<a className={`sidebarmenu-item ${sideBarMenuProps.active === 'true' ? 'active' : ''}`} {...sideBarMenuProps}>{homepageSections[i]}</a>);
    }
    return slidesNumbers;
  }

  render() {
    const {
      getCurrentSlideIndex, style, className,
    } = this.props;
    const currentSlideIndex = getCurrentSlideIndex();

    return (
      <div className={className} style={style}>
        <div className="site-logo">
          OpenDesk
        </div>
        <div className="menu-items">
          {this.renderSlidesNumbers(currentSlideIndex)}
        </div>
      </div>
    );
  }
}

CustomControls.propTypes = {
  className: PropTypes.string,
  getCurrentSlideIndex: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  scrollToSlide: PropTypes.func.isRequired,
  slidesCount: PropTypes.number.isRequired,
  style: PropTypes.object,
};

CustomControls.defaultProps = {
  className: 'full-page-controls',
  style: {
    // left: '50%',
    // paddingTop: '10px',
    // position: 'fixed',
    // transform: 'translateX(-50%)',
  },
};

export default function FullPageExampleCustomControls() {
  const baseStyle = {
    marginLeft: '200px',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  };
  return (
    <div className="main-content">
      <FullPage controls={CustomControls}>
        <Slide
          style={{
            ...baseStyle,
            background: '#2ECC40',
          }}
        >
          <h1>HOME</h1>
        </Slide>
        <Slide
          style={{
            ...baseStyle,
            background: '#0074D9',
          }}
        >
          <h1>SERVICES</h1>
        </Slide>
        <Slide
          style={{
            ...baseStyle,
            background: '#00c4ff',
          }}
        >
          <h1>PRODUCTS</h1>
        </Slide>
        <Slide
          style={{
            ...baseStyle,
            background: '#d52685',
          }}
        >
          <h1>PROJECTS</h1>
        </Slide>
        <Slide
          style={{
            ...baseStyle,
            background: '#d52685',
          }}
        >
          <h1>PARTNERS</h1>
        </Slide>
        <Slide
          style={{
            ...baseStyle,
            background: '#d52685',
          }}
        >
          <h1>CONTACT</h1>
        </Slide>
      </FullPage>
    </div>
  );
}
