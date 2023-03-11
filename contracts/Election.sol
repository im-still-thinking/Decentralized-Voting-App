// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <=0.8.19;

contract Election {
    // Read/write candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    // Read/write candidates
    mapping(uint => Candidate) public candidates;

    // Store Candidates Count
    uint public candidatesCount;

    constructor () public{
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
    }

    function addCandidate (string memory _name) private {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

    function addVote (uint uid) private{
        Candidate storage candidateInfo = candidates[uid];
        candidateInfo.voteCount++;

    }
}