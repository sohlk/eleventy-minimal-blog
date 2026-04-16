import pluginRss from "@11ty/eleventy-plugin-rss";
import SyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- more -->",
    excerpt_alias: 'summary'
  });
  eleventyConfig.addPassthroughCopy("assets/");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(SyntaxHighlight);
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

