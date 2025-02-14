const flags: Record<string, string> = {
  greece: "🇬🇷",
  usa: "🇺🇸",
  uk: "🇬🇧",
  japan: "🇯🇵",
  india: "🇮🇳",
  germany: "🇩🇪",
  brazil: "🇧🇷",
  australia: "🇦🇺",
};

const countryFlag = (country: string): string => {
  return flags[country.toLowerCase()];
};

export const getCountryTime = (country: string): string | ArrayBuffer => {
  try {
    const timeZones: { [key: string]: string } = {
      greece: "Europe/Athens",
      usa: "America/New_York",
      uk: "Europe/London",
      japan: "Asia/Tokyo",
      india: "Asia/Kolkata",
      germany: "Europe/Berlin",
      brazil: "America/Sao_Paulo",
      australia: "Australia/Sydney",
    };

    const timeZone = timeZones[country.toLowerCase()];
    if (!timeZone) return "Unknown country";

    // returns localtimezone
    const time = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(new Date());

    return `The time in ${countryFlag(country)} ${country} is: ${time}`;
  } catch (error) {
    return "Error getting local time" + error;
  }
};
