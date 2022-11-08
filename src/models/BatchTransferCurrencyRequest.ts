/* tslint:disable */
/* eslint-disable */
/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.2.0
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
 * @interface BatchTransferCurrencyRequest
 */
export interface BatchTransferCurrencyRequest {
    /**
     * An array of valid EVM based addresses to transfer currency to.
     * @type {Array<string>}
     * @memberof BatchTransferCurrencyRequest
     */
    addresses?: Array<string>;
    /**
     * An array of wallet ids within the MetaFab ecosystem to transfer currency to.
     * @type {Array<string>}
     * @memberof BatchTransferCurrencyRequest
     */
    walletIds?: Array<string>;
    /**
     * An array of currency amounts to transfer. Ordering corresponds to the ordering of provided `addresses` and/or `walletIds`. If both `addresses` and `walletIds` are provided, `addresses` are first in the order.
     * @type {Array<number>}
     * @memberof BatchTransferCurrencyRequest
     */
    amounts: Array<number>;
    /**
     * An optional array of uint256 numbers to reference each transfer in the batch. Ordering corresponds to the ordering of provided `addresses` or `walletIds`. If both `addresses` and `walletIds` are provided, `addresses` are first in the order.
     * @type {Array<number>}
     * @memberof BatchTransferCurrencyRequest
     */
    references?: Array<number>;
}

/**
 * Check if a given object implements the BatchTransferCurrencyRequest interface.
 */
export function instanceOfBatchTransferCurrencyRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "amounts" in value;

    return isInstance;
}

export function BatchTransferCurrencyRequestFromJSON(json: any): BatchTransferCurrencyRequest {
    return BatchTransferCurrencyRequestFromJSONTyped(json, false);
}

export function BatchTransferCurrencyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchTransferCurrencyRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addresses': !exists(json, 'addresses') ? undefined : json['addresses'],
        'walletIds': !exists(json, 'walletIds') ? undefined : json['walletIds'],
        'amounts': json['amounts'],
        'references': !exists(json, 'references') ? undefined : json['references'],
    };
}

export function BatchTransferCurrencyRequestToJSON(value?: BatchTransferCurrencyRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addresses': value.addresses,
        'walletIds': value.walletIds,
        'amounts': value.amounts,
        'references': value.references,
    };
}

