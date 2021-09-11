pragma solidity ^0.4.17;

//import { verify } from "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract Inbox {
    string public message;
    bool public tf;

    function Inbox(string initialMesage) public {
        message = initialMesage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }
    //function testMerkleTree(bytes32[] proof, bytes32 root, bytes32 leaf) public returns (bool) {
      //return verify(proof, root, leaf);
    //  return true;
    //}
}
