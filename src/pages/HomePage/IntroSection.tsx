import * as React from 'react';

import bookImg from '../../assets/img/book.jpeg';

export const IntroSection = () => {
  return (
    <div className="container-fluid intro-container">
      <div className="row">
        <div className="col-lg-3">
          <img src={bookImg} />
        </div>
        <div className="col-lg-9">
          <h3>Welcome to Shalom Friend</h3>
          <p>
            In this website you will find teachings from Rabbi Don Goldstein. No
            matter where you are starting from, you are welcome here! This is a
            place where both Jews and non-Jews can come watch videos to learn in
            an easy to understand way about worshiping the G-d of Abraham, Isaac
            and Jacob, experience Messianic music, Davidic dance, anointed
            teachings and life changing healings. Rabbi Don, and his wife
            Jackie, grew up in Conservative Judaism. In their early 30s they
            learned about, and received, Yeshua as their Messiah. This website
            is meant to share the wisdom, beauty, peace and joy of walking with
            Yeshua for over 35 years. Please take some time to explore this
            website. It is loaded with inspiring information. Also, check out
            Rabbi Don’s book, “I have a Friend Who’s Jewish Do You”. And his
            second book “Ok L-rd, Now What?”
          </p>

          <p>
            “Don loved G-d with all his heart, soul, and might. His life and his
            legacy was all about sharing that love with everyone he met. His
            strong faith and love of G-d motivated him to write the book: I Have
            A Friend Who’s Jewish – Do You? This book allowed Don to show his
            love for all people, his ability to make hard concepts easy, and to
            saturate it all with his humor. “ – “Rabbi Steve Weiler”
          </p>
        </div>
      </div>
    </div>
  );
};
