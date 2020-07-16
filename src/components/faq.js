import React from "react";

const Wrapper = ({ children }) => <div className="pb-5">{children}</div>;

const Question = ({ children }) => (
  <p className="has-text-weight-bold">{children}</p>
);
const Answer = ({ children }) => <p className="pt-2">{children}</p>;

export default () => {
  return (
    <>
      <Wrapper>
        <Question>What is OTP and TOTP?</Question>
        <Answer>
          <a href="https://en.wikipedia.org/wiki/Time-based_One-time_Password_algorithm">
            Wikipedia
          </a>{" "}
          explains how it works better than I will. But the short version is
          that it's the code that apps like Google Authenticator generates that
          can be used as a second factor on many sites and services.
        </Answer>
      </Wrapper>
      <Wrapper>
        <Question>How can this be secure?</Question>
        <Answer>
          No data leaves this website. Everything that you see here is being
          rendered in your browser on your device.
        </Answer>
      </Wrapper>
      <Wrapper>
        <Question>
          How can I verify that no data is being sent elsewhere?
        </Question>
        <Answer>
          Right click anywhere on this page and select Inspect or Inspect
          Element. Then open the network tab and reload the page.
        </Answer>
        <Answer>
          You can also check out the{" "}
          <a href="https://github.com/cfarvidson/react-totp">source code</a>.
        </Answer>
      </Wrapper>
      <Wrapper>
        <Question>
          Isn't the whole point of TOTP and 2FA to not be stored anywhere other
          than on that device?
        </Question>
        <Answer>Yes!</Answer>
        <Answer>
          But some password wallet services does not offer backup codes for your
          2FA.
        </Answer>
        <Answer>
          What happens if you are on a trip and your phone is stolen and you
          can't event contact anyone before you get in to your password wallet?
        </Answer>
        <Answer>
          If you store your secret somewhere (on paper or on the internet) where
          only you know where it is you can then access this page to genererate
          a secret.
        </Answer>
      </Wrapper>
    </>
  );
};
