const abi = [
	  {
		"inputs": [
		  {
			"internalType": "uint256",
			"name": "forSale_",
			"type": "uint256"
		  },
		  {
			"internalType": "uint256",
			"name": "price_",
			"type": "uint256"
		  },
		  {
			"internalType": "address payable",
			"name": "beneficiary_",
			"type": "address"
		  },
		  {
			"internalType": "contract Nft",
			"name": "nft_",
			"type": "address"
		  }
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	  },
	  {
		"inputs": [],
		"name": "beneficiary",
		"outputs": [
		  {
			"internalType": "address payable",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "forSale",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "nft",
		"outputs": [
		  {
			"internalType": "contract Nft",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "price",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
		  }
		],
		"name": "purchase",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	  }
	]
  
export default abi