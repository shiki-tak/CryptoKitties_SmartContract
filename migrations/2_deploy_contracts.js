const KittyAccessControl = artifacts.require('KittyAccessControl.sol');
const KittyBase = artifacts.require('KittyBase.sol');
const KittyOwnership = artifacts.require('KittyOwnership.sol');
const KittyBreeding = artifacts.require('KittyBreeding.sol');
const KittyAuction = artifacts.require('KittyAuction.sol');
const KittyMinting = artifacts.require('KittyMinting.sol');
const KittyCore = artifacts.require('KittyCore.sol');

module.exports = function (deployer) {
  deployer.deploy(KittyAccessControl).then(() => {
    return deployer.deploy(KittyBase)
  }).then(() => {
    return deployer.deploy(KittyOwnership)
  }).then(() => {
    return deployer.deploy(KittyBreeding)
  }).then(() => {
    return deployer.deploy(KittyAuction)
  }).then(() => {
    return deployer.deploy(KittyMinting)
  }).then(() => {
    return deployer.deploy(KittyCore)
  });
}
