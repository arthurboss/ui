import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import Link from '../Link';
import Wrapper from '../Wrapper';
import Icon from '../Icon';
import { iconWfpLogoExtendedEn, iconWfpLogoVerticalEn } from '@wfp/icons';

const sdgIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="46"
    height="46"
    viewBox="0 0 46 46"
    className="wfp--footer__sdg">
    <g fill="none">
      <path
        fill="#56C02B"
        d="M12.3125,16.5815 C12.8725,15.6305 13.5505,14.7585 14.3295,13.9865 L7.7155,6.7355 C6.0525,8.3255 4.6335,10.1685 3.5175,12.2005 L12.3125,16.5815 Z"
      />
      <path
        fill="#DDA63A"
        d="M28.5244,11.4585 C29.5254,11.9175 30.4574,12.5025 31.2964,13.1965 L37.9284,5.9555 C36.1824,4.4495 34.2024,3.2065 32.0514,2.2895 L28.5244,11.4585 Z"
      />
      <path
        fill="#C5192D"
        d="M43.7119,13.6387 L34.9219,18.0207 C35.3419,18.9997 35.6409,20.0407 35.8019,21.1257 L45.5789,20.2027 C45.2909,17.8887 44.6499,15.6807 43.7119,13.6387"
      />
      <path
        fill="#4C9F38"
        d="M34.291,16.7505 L43.08,12.3695 C41.991,10.3465 40.603,8.5085 38.973,6.9165 L32.341,14.1555 C33.097,14.9315 33.754,15.8025 34.291,16.7505"
      />
      <path
        fill="#3F7E44"
        d="M10.5664,22.9961 C10.5664,22.7981 10.5724,22.6001 10.5814,22.4041 L0.8014,21.5291 C0.7704,22.0141 0.7524,22.5021 0.7524,22.9961 C0.7524,24.8721 0.9854,26.6941 1.4184,28.4351 L10.8634,25.7261 C10.6704,24.8461 10.5664,23.9331 10.5664,22.9961"
      />
      <path
        fill="#FCC30B"
        d="M33.0605,31.0342 C32.3655,31.8802 31.5625,32.6352 30.6755,33.2772 L35.8385,41.6382 C37.7545,40.3402 39.4615,38.7542 40.8955,36.9422 L33.0605,31.0342 Z"
      />
      <path
        fill="#FF3A21"
        d="M35.9385,22.9961 C35.9385,23.9221 35.8385,24.8251 35.6475,25.6941 L45.0915,28.4081 C45.5225,26.6741 45.7515,24.8611 45.7515,22.9961 C45.7515,22.5331 45.7375,22.0731 45.7095,21.6151 L35.9295,22.5381 C35.9355,22.6921 35.9385,22.8431 35.9385,22.9961"
      />
      <path
        fill="#FD9D24"
        d="M13.6025,31.2207 L5.7865,37.1617 C7.2395,38.9517 8.9605,40.5127 10.8905,41.7857 L16.0525,33.4357 C15.1435,32.8057 14.3195,32.0607 13.6025,31.2207"
      />
      <path
        fill="#0A97D9"
        d="M10.7246,20.9932 C10.8996,19.8892 11.2196,18.8322 11.6616,17.8432 L2.8746,13.4662 C1.9046,15.5322 1.2386,17.7682 0.9356,20.1152 L10.7246,20.9932 Z"
      />
      <path
        fill="#A21942"
        d="M34.6377,42.3945 L29.4817,34.0445 C28.5447,34.5745 27.5357,34.9895 26.4727,35.2675 L28.2927,44.9255 C30.5567,44.4065 32.6917,43.5415 34.6377,42.3945"
      />
      <path
        fill="#26BDE2"
        d="M35.2715,27.0615 C34.9295,28.0665 34.4675,29.0135 33.8985,29.8885 L41.7405,35.8035 C43.0135,33.9725 44.0205,31.9445 44.7085,29.7735 L35.2715,27.0615 Z"
      />
      <path
        fill="#FD6925"
        d="M25.082,35.5498 C24.485,35.6358 23.874,35.6828 23.252,35.6828 C22.753,35.6828 22.26,35.6528 21.775,35.5958 L19.957,45.2538 C21.033,45.4118 22.133,45.4958 23.252,45.4958 C24.494,45.4958 25.713,45.3938 26.899,45.1988 L25.082,35.5498 Z"
      />
      <path
        fill="#E5243B"
        d="M24.0635,10.335 C25.1535,10.405 26.2065,10.612 27.2035,10.941 L30.7305,1.774 C28.6305,1.033 26.3925,0.594 24.0635,0.512 L24.0635,10.335 Z"
      />
      <path
        fill="#DD1367"
        d="M20.3779,35.3545 C19.2769,35.0975 18.2319,34.6985 17.2639,34.1755 L12.0979,42.5325 C14.0849,43.6685 16.2579,44.5115 18.5609,45.0015 L20.3779,35.3545 Z"
      />
      <path
        fill="#19486A"
        d="M19.4395,10.896 C20.4585,10.574 21.5335,10.377 22.6445,10.326 L22.6445,0.504 C20.2835,0.567 18.0155,0.997 15.8875,1.735 L19.4395,10.896 Z"
      />
      <path
        fill="#BF8B2E"
        d="M12.7422,30.0928 C12.1192,29.1718 11.6112,28.1638 11.2462,27.0928 L1.8062,29.8008 C2.5212,32.0528 3.5812,34.1508 4.9252,36.0328 L12.7422,30.0928 Z"
      />
      <path
        fill="#00689D"
        d="M15.3916,13.0454 C16.2216,12.3884 17.1346,11.8344 18.1126,11.3994 L14.5636,2.2424 C12.4496,3.1304 10.5006,4.3324 8.7746,5.7884 L15.3916,13.0454 Z"
      />
    </g>
  </svg>
);

//import logoExtended from '../../../assets/logos/extended/en/wfp-logo-extended-black-en.svg';
//import logoVertical from '../../../assets/logos/vertical/en/wfp-logo-vertical-black-en.svg';

const Footer = ({
  buttonText,
  className,
  children,
  external,
  labelOne,
  linkTextOne,
  linkHrefOne,
  labelTwo,
  linkTextTwo,
  linkHrefTwo,
  logo,
  logoExtended,
  metaContent,
  metaLinks,
  secondary,
  pageWidth,
  ...other
}) => {
  const classNames = classnames(
    'wfp--footer',
    { 'wfp--footer--external': external },
    className
  );

  const footer = (
    <footer className={classNames}>
      <Wrapper pageWidth={pageWidth}>
        <div className="wfp--footer__content">
          {children ? (
            <div className="wfp--footer__info">{children}</div>
          ) : (
            <div className="wfp--footer__info">
              <div className="wfp--footer__info__item">
                <p className="wfp--footer__label">{labelOne}</p>
                <ul className="wfp--footer__list">
                  <li>
                    <Link href={linkHrefOne}>{linkTextOne}</Link>
                  </li>
                </ul>
              </div>
              <div className="wfp--footer__info__item">
                <p className="wfp--footer__label">{labelTwo}</p>
                <ul className="wfp--footer__list">
                  <li>
                    <Link href={linkHrefTwo}>{linkTextTwo}</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
          <div className="wfp--footer__cta">
            {logoExtended ? (
              <img
                className="wfp--footer__cta-logo"
                src={logoExtended}
                alt="World Food Programme Logo"
              />
            ) : (
              <Icon
                icon={iconWfpLogoExtendedEn}
                description="WFP"
                className="wfp--footer__cta-logo"
              />
            )}

            {logo ? (
              <img
                className="wfp--footer__cta-logo-small"
                src={logo}
                alt="World Food Programme Logo"
              />
            ) : (
              <Icon
                icon={iconWfpLogoVerticalEn}
                description="WFP"
                className="wfp--footer__cta-logo-small"
              />
            )}
            {sdgIcon}
            {secondary && (
              <div className="wfp--footer__secondary">{secondary}</div>
            )}
          </div>
        </div>
      </Wrapper>

      <Wrapper className="wfp--footer__meta" pageWidth={pageWidth}>
        {metaContent && (
          <div className="wfp--footer__meta__content">{metaContent}</div>
        )}
        {metaLinks && (
          <div className="wfp--footer__meta__links">{metaLinks}</div>
        )}
      </Wrapper>
    </footer>
  );

  return footer;
};

Footer.propTypes = {
  /**
   The content of the footer containing relevant links
 */
  children: PropTypes.node,
  /**
   Additional className which will be added
 */
  className: PropTypes.string,
  /** 
   Meta content, usually the copyright notice
 */
  metaContent: PropTypes.node,
  /**
   Optional WFP logo for mobile devices, can be used if the Logo should be provided by the CDN
 */
  logo: PropTypes.node,
  /**
   Optional WFP logo for desktop devices, can be used if the Logo should be provided by the CDN
 */
  logoExtended: PropTypes.node,
  /**
   * The width of the `Wrapper` component
   */
  pageWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'full']),
  /**
   The WFP logo
 */
  subTitle: PropTypes.node,
  /*
  labelOne: PropTypes.string,
  linkTextOne: PropTypes.string,
  linkHrefOne: PropTypes.string,
  labelTwo: PropTypes.string,
  linkTextTwo: PropTypes.string,
  linkHrefTwo: PropTypes.string,*/
};

/*Footer.defaultProps = {
  labelOne: 'Need Help?',
  linkTextOne: 'Contact',
  linkHrefOne: '#',
  labelTwo: 'Second Link',
  linkTextTwo: 'About',
  linkHrefTwo: '#',
};*/

export default Footer;
