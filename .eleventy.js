module.exports = function(eleventyConfig) {
  // Output directory: _site

  // Pass through the Netlify redirects config
  eleventyConfig.addPassthroughCopy("_redirects");

};