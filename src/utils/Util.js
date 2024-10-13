import { BigNumber, ethers } from 'ethers';
export const supportedNetworks = { 
    8453: "Base Mainnet", 
    84532: "Base Sepolia Testnet"
    
}
export const contractAddress = { 
    8453: "0xD84Bc6b79B65d2321956a9c59A1F75ad8AB1FFFe", 
    84532: "0xadb29eb9EB5b898C1f2ae1aE5C4d7AF74Bb95c8e"
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