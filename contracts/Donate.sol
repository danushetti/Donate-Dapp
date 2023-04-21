// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Donate {
    address payable owner;

    constructor(){
        owner = payable(msg.sender);
    }
    struct Memo{
        string name;
        string message;
        uint256 timestamp;
        address from;
        uint256 amount;
    }
   
    Memo[] memos;
   
    function pay(string memory _name, string memory _message) public payable{
        require(msg.value > 0, " please pay more than 0 eth");
        owner.transfer(msg.value);
        memos.push(Memo(_name, _message, block.timestamp, msg.sender, msg.value));
    }
   
    function getMemos() public view returns(Memo[] memory){
        return memos;
    }
   
}
