const ERC20 = artifacts.require("ERC20");

module.exports = function (_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(ERC20);
};
