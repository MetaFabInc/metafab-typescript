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
 * @interface TransferCollectionItemRequest
 */
export interface TransferCollectionItemRequest {
    /**
     * A valid EVM based addresses to transfer items to.
     * @type {string}
     * @memberof TransferCollectionItemRequest
     */
    address?: string;
    /**
     * A wallet id within the MetaFab ecosystem to transfer items to.
     * @type {Array<string>}
     * @memberof TransferCollectionItemRequest
     */
    walletId?: Array<string>;
    /**
     * The quantity of the collectionItemId to transfer.
     * @type {number}
     * @memberof TransferCollectionItemRequest
     */
    quantity: number;
}

/**
 * Check if a given object implements the TransferCollectionItemRequest interface.
 */
export function instanceOfTransferCollectionItemRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "quantity" in value;

    return isInstance;
}

export function TransferCollectionItemRequestFromJSON(json: any): TransferCollectionItemRequest {
    return TransferCollectionItemRequestFromJSONTyped(json, false);
}

export function TransferCollectionItemRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferCollectionItemRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': !exists(json, 'address') ? undefined : json['address'],
        'walletId': !exists(json, 'walletId') ? undefined : json['walletId'],
        'quantity': json['quantity'],
    };
}

export function TransferCollectionItemRequestToJSON(value?: TransferCollectionItemRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'walletId': value.walletId,
        'quantity': value.quantity,
    };
}

