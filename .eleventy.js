const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
module.exports = function(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- more -->",
    excerpt_alias: 'summary'
  });
  eleventyConfig.addPassthroughCopy("assets/");
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);
  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: ".site"
    },
    templateFormats: [
      "md",
      "njk",
      "css"
    ]
  };
};
