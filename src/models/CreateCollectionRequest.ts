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
 * @interface CreateCollectionRequest
 */
export interface CreateCollectionRequest {
    /**
     * The blockchain you want to deploy this item collection on. Support for new blockchains are added over time.
     * @type {string}
     * @memberof CreateCollectionRequest
     */
    chain: CreateCollectionRequestChainEnum;
}


/**
 * @export
 */
export const CreateCollectionRequestChainEnum = {
    Ethereum: 'ETHEREUM',
    Goerli: 'GOERLI',
    Matic: 'MATIC',
    Maticmumbai: 'MATICMUMBAI',
    Arbitrum: 'ARBITRUM',
    Arbitrumgoerli: 'ARBITRUMGOERLI'
} as const;
export type CreateCollectionRequestChainEnum = typeof CreateCollectionRequestChainEnum[keyof typeof CreateCollectionRequestChainEnum];


/**
 * Check if a given object implements the CreateCollectionRequest interface.
 */
export function instanceOfCreateCollectionRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "chain" in value;

    return isInstance;
}

export function CreateCollectionRequestFromJSON(json: any): CreateCollectionRequest {
    return CreateCollectionRequestFromJSONTyped(json, false);
}

export function CreateCollectionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCollectionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chain': json['chain'],
    };
}

export function CreateCollectionRequestToJSON(value?: CreateCollectionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chain': value.chain,
    };
}

