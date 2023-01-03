/* tslint:disable */
/* eslint-disable */
/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.4.1
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
 * @interface MintCurrencyRequest
 */
export interface MintCurrencyRequest {
    /**
     * The amount of currency to create (mint).
     * @type {number}
     * @memberof MintCurrencyRequest
     */
    amount: number;
    /**
     * A valid EVM based address to create (mint) currency for. For example, `0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D`.
     * @type {string}
     * @memberof MintCurrencyRequest
     */
    address?: string;
    /**
     * Any wallet id within the MetaFab ecosystem to create (mint) currency for.
     * @type {string}
     * @memberof MintCurrencyRequest
     */
    walletId?: string;
}

/**
 * Check if a given object implements the MintCurrencyRequest interface.
 */
export function instanceOfMintCurrencyRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "amount" in value;

    return isInstance;
}

export function MintCurrencyRequestFromJSON(json: any): MintCurrencyRequest {
    return MintCurrencyRequestFromJSONTyped(json, false);
}

export function MintCurrencyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MintCurrencyRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'walletId': !exists(json, 'walletId') ? undefined : json['walletId'],
    };
}

export function MintCurrencyRequestToJSON(value?: MintCurrencyRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'address': value.address,
        'walletId': value.walletId,
    };
}

