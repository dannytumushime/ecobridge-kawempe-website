const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/governance-docs");
  eleventyConfig.addPassthroughCopy({ admin: "admin" });
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
