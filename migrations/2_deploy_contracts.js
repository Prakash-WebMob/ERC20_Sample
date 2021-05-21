const SampleToken = artifacts.require("SampleToken");

module.exports = function (deployer) {
  deployer.deploy(SampleToken, 'Sample Token', 'IATI', '100000000000000000000000000000'); // 1 Trillion Tokens
};
