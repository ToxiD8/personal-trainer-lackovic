import { useState } from "react";

const COOKIE_NAME = "cookiesAccepted";
const COOKIE_MAX_AGE = "max-age=2592000; path=/; SameSite=Lax; Secure";

const getCookieValue = () => {
  return (
    document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${COOKIE_NAME}=`))
      ?.split("=")[1] ?? null
  );
};

const useCookieConsent = () => {
  const [consent, setConsent] = useState(() => getCookieValue());

  const accept = () => {
    document.cookie = `${COOKIE_NAME}=true; ${COOKIE_MAX_AGE}`;
    setConsent("true");
  };

  const decline = () => {
    document.cookie = `${COOKIE_NAME}=false; ${COOKIE_MAX_AGE}`;
    setConsent("false");
  };

  const reset = () => {
    document.cookie = `${COOKIE_NAME}=; max-age=0; path=/`;
    setConsent(null);
  };

  return { consent, accept, decline, reset };
};

export default useCookieConsent;
