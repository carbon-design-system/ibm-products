export const timeAgo = ({
  previousTime,
  secondsAgoLabel,
  minuteAgoLabel,
  minutesAgoLabel,
  hoursAgoLabel,
  hourAgoLabel,
  daysAgoLabel,
  yesterdayAtLabel,
  monthsAgoLabel,
  monthAgoLabel,
  yearsAgoLabel,
  yearAgoLabel,
  nowLabel,
}) => {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;
  const elapsed = new Date() - previousTime;
  switch (true) {
    case elapsed < msPerMinute:
      return Math.round(elapsed / 1000) > 10
        ? `${Math.round(elapsed / 1000)} ${secondsAgoLabel}`
        : nowLabel;
    case elapsed < msPerHour:
      return Math.round(elapsed / msPerMinute) > 1
        ? `${Math.round(elapsed / msPerMinute)} ${minutesAgoLabel}`
        : `${Math.round(elapsed / msPerMinute)} ${minuteAgoLabel}`;
    case elapsed < msPerDay:
      return Math.round(elapsed / msPerHour) > 1
        ? `${Math.round(elapsed / msPerHour)} ${hoursAgoLabel}`
        : `${Math.round(elapsed / msPerHour)} ${hourAgoLabel}`;
    case elapsed < msPerMonth:
      return Math.round(elapsed / msPerDay) > 1
        ? `${Math.round(elapsed / msPerDay)} ${daysAgoLabel}`
        : `${yesterdayAtLabel} ${new Date(previousTime).toLocaleTimeString(
            getBrowserLocales[0]
          )}`;
    case elapsed < msPerYear:
      return Math.round(elapsed / msPerMonth) > 1
        ? `${Math.round(elapsed / msPerMonth)} ${monthsAgoLabel}`
        : `${Math.round(elapsed / msPerMonth)} ${monthAgoLabel}`;
    default:
      return Math.round(elapsed / msPerYear) > 1
        ? `${Math.round(elapsed / msPerYear)} ${yearsAgoLabel}`
        : `${Math.round(elapsed / msPerYear)} ${yearAgoLabel}`;
  }
};

const getBrowserLocales = () => {
  const browserLocales =
    navigator.languages === undefined
      ? [navigator.language, 'en'] // add fallback 'en' if we can't get locale value from browser
      : navigator.languages;
  return browserLocales.map((locale) => {
    const trimmedLocale = locale.trim();
    return trimmedLocale;
  });
};
