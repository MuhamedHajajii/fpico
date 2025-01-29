module.exports = {
  content: ["./dist/fipco/browser/**/*.html", "./dist/fipco/browser/**/*.js"],
  css: ["./dist/fipco/browser/**/*.css"],
  safelist: [
    "intl-tel-input",
    "iti__flag-container",
    "iti__selected-flag",
    "iti__country-list",
    "iti__flag",
    "iti__country",
    "iti__dial-code",
    /^.*flags.*\.png$/, // This regex ensures any background-image with flags*.png is safelisted
  ],
};
