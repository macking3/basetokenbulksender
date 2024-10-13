![Demo](demo.mp4)
BaseTokenBulkSender - Send bulk token to address in one transaction on base. 
Build by BaseAzureteam

# How to use:

1. Connect Wallets. Support all Web3 wallets. Coinbase, Okx wallets, Metamask
2. Make sure you have a token balance in your wallets you wanted to multisend.
3. Make sure your wallet is pointed to the base sepolia network. 
4. Enter the token contract address that you would like to send.
5. Provide either JSON or CSV text in the textarea (see example below).
6. Click parse.
7. If the balance match, click approve.
8. Wait for your wallets to generate an approval transaction.
9. Once the approval transaction is mined, click send. 
10. Done!

You can test this tool on base sepolia network currently.

Contracts deployed:  
Base Sepolia Testet: 0xadb29eb9EB5b898C1f2ae1aE5C4d7AF74Bb95c8e

Example JSON:

```json
[
  { "0xCBA5018De6b2b6F89d84A1F5A68953f07554765e": "5000" },
  { "0xa6Bf70bd230867c870eF13631D7EFf1AE8Ab85c9": "6000" },
  { "0x00b5F428905DEA1a67940093fFeaCeee58cA91Ae": "500" },
  { "0x00fC79F38bAf0dE21E1fee5AC4648Bc885c1d774": "700000" }
]
```
git config user.email "sinnerslab@gmail.com" 
Example CSV:

```csv
0xCBA5018De6b2b6F89d84A1F5A68953f07554765e,5000
0xa6Bf70bd230867c870eF13631D7EFf1AE8Ab85c9,6000
0x00b5F428905DEA1a67940093fFeaCeee58cA91Ae,500
0x00fC79F38bAf0dE21E1fee5AC4648Bc885c1d774,700000
```

```
Proof of work:
https://sepolia.basescan.org/tx/0x01f9fa19886bc647e0e61b3afc52e6676436e4f85fc5e0757c51f71c5854adac


``` 

# basetokenbulksender
