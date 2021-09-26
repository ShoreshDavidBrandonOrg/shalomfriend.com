import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '~store/store';

import './assets/scss/bootstrap.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ScrollToTop } from './components/ScrollToTop';
import { ErrorBoundary } from './containers/ErrorBoundary';
import { DiscoveriesPage } from './pages/DiscoveriesPage';
import { HomePage } from './pages/HomePage';
import { JewishPage } from './pages/JewishPage';
import { LiveStreamPage } from './pages/LiveStreamPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { ServiceListPage } from './pages/ServiceListPage';
import { SingleDiscoveryPage } from './pages/SingleDiscoveryPage';
import { SingleJewishPage } from './pages/SingleJewishPage';
import { SingleServicePage } from './pages/SingleServicePage';
import './style/scss/application.scss';

render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <ErrorBoundary>
          <ScrollToTop>
            <Header />

            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/live" component={LiveStreamPage} />

              <Redirect exact path="/services" to="/services/rabbi-don" />
              <Route
                exact
                path="/services/:category"
                component={ServiceListPage}
              />
              <Route
                exact
                path="/services/:category/:slug"
                component={SingleServicePage}
              />
              <Redirect exact path="/discoveries" to="/discoveries/evolution" />
              <Route
                exact
                path="/discoveries/:category"
                component={DiscoveriesPage}
              />
              <Route
                exact
                path="/discoveries/:category/:slug"
                component={SingleDiscoveryPage}
              />
              <Route exact path="/jewish" component={JewishPage} />
              <Route exact path="/jewish/:slug" component={SingleJewishPage} />
              <Route
                exact
                path="/privacy-policy"
                component={PrivacyPolicyPage}
              />
              <Route component={NotFoundPage} />
            </Switch>
            <Footer />
          </ScrollToTop>
        </ErrorBoundary>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
