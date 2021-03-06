import * as React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { persistor } from '~store/store';

import './header.scss';

export const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener('click', (event: any) => {
      if (event.target.tagName.toLowerCase() === 'a') {
        setIsOpen(false);
      }
    });
    return () =>
      document.addEventListener('click', () => {
        setIsOpen(false);
      });
  },              []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteCache = () => {
    persistor.purge();
  };

  return (
    <div className="sdb-nav">
      <nav className="navbar navbar-expand-xl navbar-light">
        <Link to="/" style={{ marginLeft: 0, flex: 1, justifyContent: 'center' }}>
          <h3 style={{margin: 0}}>Shalom Friend</h3>
        </Link>

        <button type="button" className="navbar-toggler" onClick={toggle}>
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`${
            isOpen
              ? 'collapse show navbar-collapse'
              : 'collapse navbar-collapse'
          }`}
        >
          <ul className="ml-auto navbar-nav" style={{ marginRight: 25 }}>
            <li className="nav-item">
              <NavLink exact to="/" activeClassName="navlink-active">
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown-link">
              <div className="dropdown">
                <NavLink
                  to="/services/rabbi-don"
                  isActive={() => location.pathname.includes('services')}
                  activeClassName="navlink-active"
                >
                  Teachings
                </NavLink>
                <div className="dropdown-content">
                  <Link to="/services/rabbi-don">
                    Rabbi Don's Teachings &amp; Others
                  </Link>
                  <Link to="/services/get-healed-fast/how-to-get-healed-and-stay-healed?part=1">
                    Get Healed Fast
                  </Link>
                  <Link to="/services/holy-days">"Jewish" Holidays</Link>
                  <Link to="/services/end-times">End Times</Link>
                  <Link to="/services/bible-studies">Bible Studies</Link>
                  <Link to="/services/special-speakers">Special Speakers</Link>
                  <Link to="/services/increase-your-income">
                    Increase Your Income
                  </Link>
                  <a
                    href="https://www.ihaveafriendwhoisjewish.com/"
                    target="_blank"
                  >
                    Rabbi Don's Best Selling Book
                  </a>
                  <a
                    // tslint:disable-next-line
                    href="https://s3.amazonaws.com/images.shoreshdavidbrandon.com/pdf/discipleship-book-by-rabbi-don-goldstein.pdf"
                    target="_blank"
                  >
                    Rabbi Don's Discipleship Book
                  </a>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <NavLink exact to="/jewish" activeClassName="navlink-active">
                Jewish
              </NavLink>
            </li>
            <li className="nav-item dropdown-link">
              <div className="dropdown">
                <NavLink
                  to="/discoveries/evolution"
                  isActive={() => location.pathname.includes('discoveries')}
                  activeClassName="navlink-active"
                >
                  Discoveries
                </NavLink>
                <div className="dropdown-content">
                  <Link to="/discoveries/evolution">Evolution</Link>
                  <Link to="/discoveries/heaven-and-hell">Heaven And Hell</Link>
                  <Link to="/discoveries/prophecy">Prophecy</Link>
                  <Link to="/discoveries/supernatural">Supernatural</Link>
                  <Link to="/discoveries/usa-middle-east">
                    USA &amp; Middle East
                  </Link>
                  <Link to="/discoveries/life-issues">Life Issues</Link>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a href="https://shalom-friend-1.square.site/s/shop" target="_blank">
                Store
              </a>
            </li>
            <li className="nav-item">
              <a href="https://shalom-friend-1.square.site/product/thank-you-for-additional-donations-we-greatly-appreciate-you-/1?cp=true&sa=true&sbp=false&q=false" target="_blank">
                Donate
              </a>
            </li>
            <li className="nav-item">
              <a href="#" onClick={handleDeleteCache}>
                Delete Cache
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
