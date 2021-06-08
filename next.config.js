
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['qL9uveKQ3VyWAES3RCTpRr'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  