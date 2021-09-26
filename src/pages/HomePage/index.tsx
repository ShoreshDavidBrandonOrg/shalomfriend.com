import * as React from 'react';

import { AboutSection } from './AboutSection';
import './home.scss';
import { IntroSection } from './IntroSection';
import { RabbiSection } from './RabbiSection';
import { StatementSection } from './StatementSection';

export const HomePage = () => (
  <React.Fragment>
    <IntroSection />
    <StatementSection />
    <RabbiSection />
    <AboutSection />
  </React.Fragment>
);
