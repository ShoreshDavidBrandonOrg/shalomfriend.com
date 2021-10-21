import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';

import okLordNowWhatImg from '../../assets/img/okLordNowWhat.jpeg';
import rabbi from '../../assets/img/rabbi-don-circle.png';

export const IntroSection = () => {
  return (
    <Stack p="24" w="100%">
      <Flex>
        <Image
          src={rabbi}
          alt="Rabbi Don Goldstein"
          maxH="300"
          mb="16"
          mr="8"
        />
        <Flex direction="column">
          <Heading mb="4">Welcome to Shalom Friend</Heading>
          <Text mb="2">
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
          </Text>

          <Text>
            “Don loved G-d with all his heart, soul, and might. His life and his
            legacy was all about sharing that love with everyone he met. His
            strong faith and love of G-d motivated him to write the book: I Have
            A Friend Who’s Jewish – Do You? This book allowed Don to show his
            love for all people, his ability to make hard concepts easy, and to
            saturate it all with his humor. “ – “Rabbi Steve Weiler”
          </Text>
        </Flex>
      </Flex>
      <Flex p="8" direction="row" align="center" justify="center">
        <Stack mr="16">
          <Image
            shadow="sm"
            src="https://images-na.ssl-images-amazon.com/images/I/512TXZQRKTL._SX303_BO1,204,203,200_.jpg"
            alt="Rabbi Don Goldstein"
            h="400px"
            w="300px"
            mb="8"
          />
          <Link
            w="100%"
            href="https://s3.amazonaws.com/images.shoreshdavidbrandon.com/pdf/friend-book-ninth-printing.pdf"
          >
            <Button w="100%" colorScheme="purple">
              Read For Free
            </Button>
          </Link>
        </Stack>
        <Stack>
          <Image
            shadow="sm"
            src={okLordNowWhatImg}
            alt="Rabbi Don Goldstein"
            h="400px"
            w="300px"
            mb="8"
          />
          <Link
            w="100%"
            href="https://s3.amazonaws.com/images.shoreshdavidbrandon.com/pdf/discipleship-book-by-rabbi-don-goldstein.pdf"
          >
            <Button w="100%" colorScheme="purple">
              Read For Free
            </Button>
          </Link>
        </Stack>
      </Flex>
    </Stack>
  );
};
