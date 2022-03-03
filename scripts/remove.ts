import {ethers} from "hardhat";
import { removeSelectors } from "./libraries/diamond";

async function removeElements() {
    let remove = [];
    const t3 = await ethers.getContractFactory("Test3Faucet");
    const t3s = await t3.remove();
    await t3s.removed();

    // const sa
}