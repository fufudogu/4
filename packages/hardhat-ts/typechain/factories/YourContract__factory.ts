/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { YourContract, YourContractInterface } from "../YourContract";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "purpose",
        type: "string",
      },
    ],
    name: "SetPurpose",
    type: "event",
  },
  {
    inputs: [],
    name: "purpose",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newPurpose",
        type: "string",
      },
    ],
    name: "setPurpose",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052601c60808190527f4275696c64696e6720556e73746f707061626c6520417070732121210000000060a090815261003e9160009190610051565b5034801561004b57600080fd5b50610125565b82805461005d906100ea565b90600052602060002090601f01602090048101928261007f57600085556100c5565b82601f1061009857805160ff19168380011785556100c5565b828001600101855582156100c5579182015b828111156100c55782518255916020019190600101906100aa565b506100d19291506100d5565b5090565b5b808211156100d157600081556001016100d6565b600181811c908216806100fe57607f821691505b6020821081141561011f57634e487b7160e01b600052602260045260246000fd5b50919050565b6105a6806101346000396000f3fe6080604052600436106100295760003560e01c806370740aab1461002e578063eb68757f14610059575b600080fd5b34801561003a57600080fd5b5061004361006e565b6040516100509190610505565b60405180910390f35b61006c61006736600461030e565b6100fc565b005b6000805461007b9061051f565b80601f01602080910402602001604051908101604052809291908181526020018280546100a79061051f565b80156100f45780601f106100c9576101008083540402835291602001916100f4565b820191906000526020600020905b8154815290600101906020018083116100d757829003601f168201915b505050505081565b805161010f906000906020840190610275565b506101cb336040518060400160405280600e81526020016d73657420707572706f736520746f60901b815250600080546101489061051f565b80601f01602080910402602001604051908101604052809291908181526020018280546101749061051f565b80156101c15780601f10610196576101008083540402835291602001916101c1565b820191906000526020600020905b8154815290600101906020018083116101a457829003601f168201915b5050505050610208565b7f6ea5d6383a120235c7728a9a6751672a8ac068e4ed34dcca2ee444182c1812de3360006040516101fd92919061044c565b60405180910390a150565b61024f8383836040516024016102209392919061040c565b60408051601f198184030181529190526020810180516001600160e01b031663fb77226560e01b179052610254565b505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b8280546102819061051f565b90600052602060002090601f0160209004810192826102a357600085556102e9565b82601f106102bc57805160ff19168380011785556102e9565b828001600101855582156102e9579182015b828111156102e95782518255916020019190600101906102ce565b506102f59291506102f9565b5090565b5b808211156102f557600081556001016102fa565b60006020828403121561032057600080fd5b813567ffffffffffffffff8082111561033857600080fd5b818401915084601f83011261034c57600080fd5b81358181111561035e5761035e61055a565b604051601f8201601f19908116603f011681019083821181831017156103865761038661055a565b8160405282815287602084870101111561039f57600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000815180845260005b818110156103e5576020818501810151868301820152016103c9565b818111156103f7576000602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0384168152606060208201819052600090610430908301856103bf565b828103604084015261044281856103bf565b9695505050505050565b60018060a01b0383168152600060206040818401526000845481600182811c91508083168061047c57607f831692505b85831081141561049a57634e487b7160e01b85526022600452602485fd5b60408801839052606088018180156104b957600181146104ca576104f5565b60ff198616825287820196506104f5565b60008b81526020902060005b868110156104ef578154848201529085019089016104d6565b83019750505b50949a9950505050505050505050565b60208152600061051860208301846103bf565b9392505050565b600181811c9082168061053357607f821691505b6020821081141561055457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fdfea264697066735822122081c30ee4294d1f5db9a236c9d330d821dc3b913edd032c29bd299a822c45481164736f6c63430008060033";

type YourContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: YourContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class YourContract__factory extends ContractFactory {
  constructor(...args: YourContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "YourContract";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<YourContract> {
    return super.deploy(overrides || {}) as Promise<YourContract>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): YourContract {
    return super.attach(address) as YourContract;
  }
  connect(signer: Signer): YourContract__factory {
    return super.connect(signer) as YourContract__factory;
  }
  static readonly contractName: "YourContract";
  public readonly contractName: "YourContract";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YourContractInterface {
    return new utils.Interface(_abi) as YourContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YourContract {
    return new Contract(address, _abi, signerOrProvider) as YourContract;
  }
}
