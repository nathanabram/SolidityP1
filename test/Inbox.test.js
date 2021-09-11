const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //requiring in a constructor function here, where convention is to have it capitalized.
const web3 = new Web3(ganache.provider()); // the provider is the telephone between the network and the web3 instance being used. Each EVM has its own
const { interface, bytecode } = require('../compile'); // this var name is exactly as was exported from compile.js.
// could ? name it whatever, so long as its a 2tuple, it will map to the two things (interface and bytecode)

let accounts;
let inbox;

beforeEach(async () => {
  // get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy the contracts
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi!'] })
    .send({ from: accounts[0], gas: '1000000'});
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    console.log(inbox.options.address);
    assert.ok(inbox.options.address);
  });

  it('has a default message', async () => {
    //inbox.methods.setMessage('testMess');
    const message = await inbox.methods.message().call();
    assert.equal(message, 'Hi!');
  }); // asserts that there's a first message that comes in without any input (a default message)

  it('can change its default message', async () => {
    await inbox.methods.setMessage('newMessage').send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, 'newMessage');
  });
});
