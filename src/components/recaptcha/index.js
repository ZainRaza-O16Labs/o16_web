import dynamic from "next/dynamic";

const RecaptchaWithNoSSR = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});

const Recaptcha = ({ onChange, onExpired, onErrored }) => {
  const siteKey = process.env.siteKey;

  return (
    <RecaptchaWithNoSSR
      sitekey={siteKey}
      onChange={onChange}
      onExpired={onExpired}
      onErrored={onErrored}
    />
  );
};

export default Recaptcha;
