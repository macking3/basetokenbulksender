import { BigNumber, ethers } from 'ethers';
export const supportedNetworks = {
    1: "ETH Mainnet network",
    534352: "Scroll network",
    534351: "ScrollSepolia network",
    8453: "Base network",
    42161: "Arbitrum One",
    137: "Polygon Mainnet"
    
}
export const contractAddress = {
    1: "",
    534352: "0xD84Bc6b79B65d2321956a9c59A1F75ad8AB1FFFe",
    534351: "0x5071E7f677ccCced742a6d9F286e1FB561162bf2",
    8453: "",
    42161: "0x3feb61b3ef56a75A4cd1590dc1e889956b09e7be",
    137: "0x0199968F50978C0360E393A507cEd5B7D0AaD515"
}
export function getSupportedNetworks() {
    const arr = [];
    for (const property in supportedNetworks) {
        arr.push(supportedNetworks[property]);
    }
    return arr;
}
export const objectFromInputString = (inputString, decimal) => {
    const regex = /^(0x[a-fA-F0-9]{1,},\s*\d+(\.\d{1,18})?\n?)+$/;

    if (!regex.test(inputString)) {
        console.log('Invalid input string format'); return;
    }

    const lines = inputString.trim().split('\n');
    const addresses = [];
    const amounts = [];
    var total = BigNumber.from("0");
    const addressIndexMap = {};

    for (const line of lines) {
        const [address, amount] = line.split(',').map((str) => str.trim());
        const parsedAmount = BigNumber.from(ethers.utils.parseUnits(amount, decimal));
        total = total.add(parsedAmount);

        if (addressIndexMap[address] > -1) {
            const existingIndex = addressIndexMap[address];
            amounts[existingIndex] = amounts[existingIndex].add(parsedAmount);
        } else {
            addresses.push(address);
            amounts.push(parsedAmount);
            addressIndexMap[address] = addresses.length - 1;
        }
    }

    return [addresses, amounts, total];
}