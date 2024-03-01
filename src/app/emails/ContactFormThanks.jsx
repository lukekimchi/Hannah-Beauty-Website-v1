import React from "react";
import {
  Body,
  Html,
  Container,
  Tailwind,
  Text,
  Button,
  Img,
  Head,
  Heading,
} from "@react-email/components";
import { FaInstagram, FaFacebookSquare, FaTiktok } from "react-icons/fa";

const ContactFormThanks = ({ name }) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="flex items-center justify-center bg-white my-12 mx-auto font-sans">
          <Container className="p-8 rounded-lg shadow-md text-center">
            <Heading className="text-xl pt-4">
              Thanks for reaching out, {name}! 😊
            </Heading>
            <Text className="text-lg font-light text-gray-700">
              We've received your message and will get back to you as soon as
              possible.
            </Text>
            <Text className="text-lg font-light text-gray-700">
              In the meantime check us out on our socials!
            </Text>
            <div></div>
            <div className="flex flex-row justify-center w-full gap-2">
              <a href="https://www.instagram.com/hannah_beauty_nz">
                <FaInstagram color="gray" />
              </a>
              <a href="https://www.instagram.com/hannah_beauty_nz">
                <FaFacebookSquare color="gray" />
              </a>
              <a href="https://www.instagram.com/hannah_beauty_nz">
                <FaTiktok color="gray" />
              </a>
            </div>
            <Button
              href="https://www.hannahbeauty.co.nz"
              className="flex flex-end bg-red-500 text-white font-semibold px-4 py-3 mt-10 rounded-md"
            >
              Visit Website
            </Button>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormThanks;

// FIXME: Facebook and tiktok links
