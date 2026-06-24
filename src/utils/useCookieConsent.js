import { useState } from "react";

const COOKIE_NAME = "cookieConsent";
const COOKIE_MAX_AGE = "max-age=2592000; path=/; SameSite=Lax; Secure";

const getStoredConsent = () => {
  const raw = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${COOKIE_NAME}=`))
    ?.split("=")[1];

  if (!raw) return null;

  try {
    return JSON.parse(decodeURIComponent(raw));
  } catch {
    return null;
  }
};

const useCookieConsent = () => {
  const [consent, setConsent] = useState(() => getStoredConsent());

  const saveConsent = (preferences) => {
    const value = encodeURIComponent(JSON.stringify(preferences));
    document.cookie = `${COOKIE_NAME}=${value}; ${COOKIE_MAX_AGE}`;
    setConsent(preferences);
  };

  const acceptAll = () => saveConsent({ necessary: true, analytics: true });
  const declineAll = () => saveConsent({ necessary: true, analytics: false });
  const savePreferences = (prefs) => saveConsent({ necessary: true, ...prefs });

  return { consent, acceptAll, declineAll, savePreferences };
};

export default useCookieConsent;
