export const timeAgo = (previousTime) => {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;
  const elapsed = new Date() - previousTime;
  switch (true) {
    case elapsed < msPerMinute:
      return Math.round(elapsed / 1000) > 10
        ? `${Math.round(elapsed / 1000)} seconds ago`
        : 'Now';
    case elapsed < msPerHour:
      return Math.round(elapsed / msPerMinute) > 1
        ? `${Math.round(elapsed / msPerMinute)} minutes ago`
        : `${Math.round(elapsed / msPerMinute)} minute ago`;
    case elapsed < msPerDay:
      return Math.round(elapsed / msPerHour) > 1
        ? `${Math.round(elapsed / msPerHour)} hours ago`
        : `${Math.round(elapsed / msPerHour)} hour ago`;
    case elapsed < msPerMonth:
      return Math.round(elapsed / msPerDay) > 1
        ? `${Math.round(elapsed / msPerDay)} days ago`
        : `Yesterday at ${new Date(previousTime).toLocaleTimeString(
            getBrowserLocales[0]
          )}`;
    case elapsed < msPerYear:
      return Math.round(elapsed / msPerMonth) > 1
        ? `${Math.round(elapsed / msPerMonth)} months ago`
        : `${Math.round(elapsed / msPerMonth)} month ago`;
    default:
      return Math.round(elapsed / msPerYear) > 1
        ? `${Math.round(elapsed / msPerYear)} years ago`
        : `${Math.round(elapsed / msPerYear)} year ago`;
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
