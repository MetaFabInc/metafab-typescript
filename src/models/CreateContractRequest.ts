/* tslint:disable */
/* eslint-disable */
/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.3.0
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CreateContractRequest
 */
export interface CreateContractRequest {
    /**
     * The address of the existing contract.
     * @type {string}
     * @memberof CreateContractRequest
     */
    address: string;
    /**
     * JSON of the abi.
     * @type {string}
     * @memberof CreateContractRequest
     */
    abi: string;
    /**
     * The blockchain you want to deploy this currency on. Support for new blockchains are added over time.
     * @type {string}
     * @memberof CreateContractRequest
     */
    chain: CreateContractRequestChainEnum;
}


/**
 * @export
 */
export const CreateContractRequestChainEnum = {
    Ethereum: 'ETHEREUM',
    Goerli: 'GOERLI',
    Matic: 'MATIC',
    Maticmumbai: 'MATICMUMBAI',
    Arbitrum: 'ARBITRUM',
    Arbitrumgoerli: 'ARBITRUMGOERLI'
} as const;
export type CreateContractRequestChainEnum = typeof CreateContractRequestChainEnum[keyof typeof CreateContractRequestChainEnum];


/**
 * Check if a given object implements the CreateContractRequest interface.
 */
export function instanceOfCreateContractRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "abi" in value;
    isInstance = isInstance && "chain" in value;

    return isInstance;
}

export function CreateContractRequestFromJSON(json: any): CreateContractRequest {
    return CreateContractRequestFromJSONTyped(json, false);
}

export function CreateContractRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateContractRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': json['address'],
        'abi': json['abi'],
        'chain': json['chain'],
    };
}

export function CreateContractRequestToJSON(value?: CreateContractRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'abi': value.abi,
        'chain': value.chain,
    };
}

