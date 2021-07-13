const now = String(Date.now());
const htmlmin = require("html-minifier");
const { DateTime } = require("luxon");
const timeToRead = require("eleventy-plugin-time-to-read");

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addWatchTarget("./styles/style.css");

  eleventyConfig.addPassthroughCopy({ "./styles/style.css": "./style.css" });

  eleventyConfig.addPassthroughCopy({ "./public": "./" });

  eleventyConfig.addShortcode("version", function () {
    return now;
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addPlugin(timeToRead, {
    speed: "1000 characters per minute",
    language: "en",
    style: "short",
    minutes: true,
    append: " read",
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    const date = new Date(dateObj);
    return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_FULL);
  });

  eleventyConfig.addFilter("limit", function (arr, limit) {
    return arr.slice(0, limit);
  });

  eleventyConfig.addFilter("excerpt", (post) => {
    const content = post.replace(/(<([^>]+)>)/gi, "");
    return content.substr(0, content.lastIndexOf(" ", 200)) + "...";
  });

  eleventyConfig.setTemplateFormats([
    "md",
    "njk",
    "jpg",
    "png",
    "jpeg",
    "webp",
    "html",
  ]);

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith(".html")
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
