// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract TokenMultiSender {
    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );
    event SendBulk(
        address[] recipients,
        uint256[] amounts,
        address tokenAddress
    );

    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function renounceOwnership() public onlyOwner {
        emit OwnershipTransferred(owner, address(0));
        owner = address(0);
    }

    function transferOwnership(address newOwner) public onlyOwner {
        require(
            newOwner != address(0),
            "Ownable: new owner is the zero address"
        );
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }

    function sendBulk(
        address[] memory recipients,
        uint256[] memory amounts,
        address tokenAddress
    ) public {
        require(
            recipients.length == amounts.length,
            "Recipient and amount arrays must have the same length"
        );

        // Assuming tokenAddress is an ERC20 token
        IERC20 token = IERC20(tokenAddress);

        for (uint256 i = 0; i < recipients.length; i++) {
            token.transferFrom(msg.sender, recipients[i], amounts[i]);
        }

        emit SendBulk(recipients, amounts, tokenAddress);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Ownable: caller is not the owner");
        _;
    }
}

interface IERC20 {
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);
}
