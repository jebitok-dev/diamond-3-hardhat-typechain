import {ethers} from "hardhat";
import {FacetCutAction, getSelectors} from "./libraries/diamond"

async function main() {
    let cut = [];
    const t1 = await ethers.getContractFactory("Test1Faucet")
    const t1s = await t1.deploy();
    await t1s.deployed();
    cut.push({faucetAddress: t1s.address, action: FacetCutAction.Add, functionSelectors: getSelectors(t1s)})

    const diamondAddress = "";

    const cutFaucet = await ethers.getContractAt("DiamondCutFaucet", diamondAddress);
    const payload = t1s.interface.encodeFunctionData("balanceOf", "4");
    await cutFaucet.diamondCut(cut, diamondAddress, payload)


    const Faucet = await ethers.getContractAt("Test2Faucet", diamondAddress);
    //@ts-ignore
    await Facet.balanceOf();
}

// Fork a sample diamond template and add new Facet with new functions and call atleast one of the functions