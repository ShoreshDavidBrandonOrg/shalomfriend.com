import { Heading } from '@chakra-ui/react';
import * as React from 'react';
import { Link } from 'react-router-dom';

export const AboutSection = () => {
  return (
    <div id="aboutSection" className="container-fluid about-container">
      <div className="col-lg-8 offset-lg-2">
        <Heading textAlign="center" py="4">
          Our Mission
        </Heading>
        <p>
          Our mission can be summed up as follows. People everywhere need to be
          healed of many things, both mental/emotional and physical diseases. In
          addition, there are billions worldwide who have not accepted Yeshua as
          their Messiah. Therefore, we reach out internationally with our
          healing teachings and more to positively change their lives. For He
          said: “I am the way, the truth, and the life! No one comes to the
          Father except through Me.” Go{' '}
          <Link to="/services/get-healed-fast/how-to-get-healed-and-stay-healed?part=1">
            here
          </Link>{' '}
          for our healing teachings... and{' '}
          <a
            href="https://s3.amazonaws.com/images.shoreshdavidbrandon.com/pdf/friend-book-ninth-printing.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            <strong>click here</strong>
          </a>{' '}
          to read Rabbi Don’s worldwide best selling book for free
        </p>
      </div>
    </div>
  );
};
