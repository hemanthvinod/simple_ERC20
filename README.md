# simple_ERC20
# ERC20 Token Implementation

This is a basic implementation of an ERC20 token contract in Solidity. The contract provides functionalities for token transfers, approvals, and other ERC20 standard methods.

## Token Details

- Token Name: NewCoin (NC)
- Decimals: 18

## Contract Functions

### `transfer`
function transfer(address recipient, uint amount) external returns (bool)

Allows the sender to transfer a specified amount of tokens to the given recipient address.

### `approve`


function approve(address spender, uint amount) external returns (bool)


Allows the token owner to approve a spender to spend a specified amount of tokens on their behalf.

### `transferFrom`
function transferFrom(address sender, address recipient, uint amount) external returns (bool)

Allows a spender to transfer tokens from the specified sender's address to the given recipient address, provided the spender has been approved by the sender.

### `mint`
function mint(uint amount) external


Allows the contract owner to mint a specified amount of tokens and assign them to their own address.

### `burn`

function burn(uint amount) external

Allows the token owner to burn a specified amount of their own tokens, permanently reducing the total supply.

## Development

To deploy and interact with the contract:

1. Install a compatible Ethereum development environment (e.g., Remix, Truffle, Hardhat).
2. Compile the contract using a Solidity compiler (version 0.8.19).
3. Deploy the contract to an Ethereum network of your choice.
4. Use a wallet or contract interface to interact with the deployed contract.

## License

This contract is licensed under the MIT License. Please refer to the [LICENSE](LICENSE) file for more information.

Feel free to customize and modify the README according to your needs, adding additional information about deployment, testing, or any other relevant details.
