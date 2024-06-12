const { Web3 } = require('web3');
const web3 = new Web3('http://localhost:8545');

async function sendEth() {
  const accounts = await web3.eth.getAccounts();
  const sender = accounts[0];
  const receiver = "0xF62242F0e2adCd6FBA36292A073824Fc7746d9bC";
  const amountToSend = web3.utils.toWei('100000000000000', 'ether'); // Change '1' to the amount of ETH you want to send

  const receipt = await web3.eth.sendTransaction({
    from: sender,
    to: receiver,
    value: amountToSend,
  });

  console.log(`Transaction successful with hash: ${receipt.transactionHash}`);
}

sendEth().catch(console.error);