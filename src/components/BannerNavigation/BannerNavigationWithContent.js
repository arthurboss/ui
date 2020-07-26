import PropTypes from 'prop-types';
import React from 'react';
import { BannerNavigation, BannerNavigationItem } from './BannerNavigation';
import Search from '../Search';
import Link from '../Link';
import { pageWidths } from '../Wrapper';

const BannerNavigationWithContent = ({ searchOnChange, search, ...other }) => (
  <BannerNavigation {...other}>
    <BannerNavigationItem>
      <Link href="https://newgo.wfp.org" target="_blank">
        WFPgo
      </Link>
    </BannerNavigationItem>
    <BannerNavigationItem>
      <Link href="http://communities.wfp.org" target="_blank">
        Communities
      </Link>
    </BannerNavigationItem>
    <BannerNavigationItem>
      <Link href="http://manuals.wfp.org" target="_blank">
        Manuals
      </Link>
    </BannerNavigationItem>
    <BannerNavigationItem>
      <Link href="https://go.docs.wfp.org" target="_blank">
        GoDocs
      </Link>
    </BannerNavigationItem>
    <BannerNavigationItem>
      <Link href="http://opweb.wfp.org" target="_blank">
        OPweb
      </Link>
    </BannerNavigationItem>
    <BannerNavigationItem>
      <Link href="http://info.wfp.org" target="_blank">
        IN/FO
      </Link>
    </BannerNavigationItem>
    <BannerNavigationItem>
      <Link href="https://selfservice.go.wfp.org" target="_blank">
        Self-Service
      </Link>
    </BannerNavigationItem>
    <BannerNavigationItem>
      <Link href="https://welearn.wfp.org" target="_blank">
        WeLearn
      </Link>
    </BannerNavigationItem>
    {search && (
      <BannerNavigationItem>
        <form
          action="http://gtd.wfp.org"
          method="GET"
          acceptCharset="UTF-8"
          target="_blank">
          <Search
            kind="banner"
            id="search-2"
            labelText="Find People"
            name="q"
            placeHolderText="Find People"
            onChange={searchOnChange}
          />
        </form>
      </BannerNavigationItem>
    )}
  </BannerNavigation>
);

BannerNavigationWithContent.propTypes = {
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  pageWidth: PropTypes.string,
  /**
   * Allows to disable the search input
   */
  search: PropTypes.bool,
  /**
   * A onChange Function for the search
   */
  searchOnChange: PropTypes.func,
};

BannerNavigationWithContent.defaultProps = {
  search: false,
  searchOnChange: () => {},
};

export { BannerNavigationWithContent };
