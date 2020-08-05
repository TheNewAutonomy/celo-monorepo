import { EventLog } from '@celo/sdk-types/commons'
import { AbiItem } from 'web3-utils'
declare module 'web3-eth-abi' {
  export interface ABIDefinition extends AbiItem {
    signature: string
  }

  export type ABIType = 'uint256' | 'boolean' | 'string' | 'bytes' | string // TODO complete list

  export interface DecodedParamsArray {
    [index: number]: any
    __length__: number
  }
  export interface DecodedParamsObject extends DecodedParamsArray {
    [key: string]: any
  }

  export interface AbiCoder {
    decodeLog(inputs: AbiInput[], hexString: string, topics: string[]): EventLog

    encodeParameter(type: ABIType, parameter: any): string
    encodeParameters(types: ABIType[], paramaters: any[]): string

    // encodeEventSignature(name: string | object): string
    // encodeFunctionCall(jsonInterface: object, parameters: any[]): string
    // encodeFunctionSignature(name: string | object): string

    decodeParameter(type: ABIType, hex: string): any

    decodeParameters(types: ABIType[], hex: string): DecodedParamsArray
    decodeParameters(types: AbiInput[], hex: string): DecodedParamsObject
  }

  declare const coder: AbiCoder

  export default coder
}
