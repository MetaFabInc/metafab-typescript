/* tslint:disable */
/* eslint-disable */
/**
 * MetaFab API
 * Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.5.1
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
 * @interface CreateShopRequest
 */
export interface CreateShopRequest {
    /**
     * The name of this item collection. This can be anything, such as `Production - Game Shop`, `Testing - My Game Shop`, etc.
     * @type {string}
     * @memberof CreateShopRequest
     */
    name?: string;
    /**
     * The blockchain you want to deploy this shop on. Support for new blockchains are added over time.
     * @type {string}
     * @memberof CreateShopRequest
     */
    chain: CreateShopRequestChainEnum;
}


/**
 * @export
 */
export const CreateShopRequestChainEnum = {
    Arbitrum: 'ARBITRUM',
    Arbitrumgoerli: 'ARBITRUMGOERLI',
    Arbitrumnova: 'ARBITRUMNOVA',
    Avalanche: 'AVALANCHE',
    Avalanchefuji: 'AVALANCHEFUJI',
    Ethereum: 'ETHEREUM',
    Fantom: 'FANTOM',
    Fantomtest: 'FANTOMTEST',
    Goerli: 'GOERLI',
    Matic: 'MATIC',
    Maticmumbai: 'MATICMUMBAI',
    Thundercore: 'THUNDERCORE',
    Thundercoretestnet: 'THUNDERCORETESTNET'
} as const;
export type CreateShopRequestChainEnum = typeof CreateShopRequestChainEnum[keyof typeof CreateShopRequestChainEnum];


/**
 * Check if a given object implements the CreateShopRequest interface.
 */
export function instanceOfCreateShopRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "chain" in value;

    return isInstance;
}

export function CreateShopRequestFromJSON(json: any): CreateShopRequest {
    return CreateShopRequestFromJSONTyped(json, false);
}

export function CreateShopRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateShopRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'chain': json['chain'],
    };
}

export function CreateShopRequestToJSON(value?: CreateShopRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'chain': value.chain,
    };
}

