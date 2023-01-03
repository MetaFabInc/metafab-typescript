/* tslint:disable */
/* eslint-disable */
/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.4.0
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
 * @interface WithdrawFromShopRequest
 */
export interface WithdrawFromShopRequest {
    /**
     * A valid EVM based address to withdraw to. For example, `0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D`.
     * @type {string}
     * @memberof WithdrawFromShopRequest
     */
    address?: string;
    /**
     * Any wallet id within the MetaFab ecosystem to withdraw to.
     * @type {string}
     * @memberof WithdrawFromShopRequest
     */
    walletId?: string;
    /**
     * The address of the currency (ERC20) token to withdraw from the shop. If no currencyAddress or currencyId, and no collectionAddress or collectionId are provided, the native token held by the shop will be withdrawn.
     * @type {string}
     * @memberof WithdrawFromShopRequest
     */
    currencyAddress?: string;
    /**
     * A valid MetaFab currency id that represents the currency token to withdraw from the shop. `currencyAddress` or `currencyId` can be provided when withdrawing currency.
     * @type {string}
     * @memberof WithdrawFromShopRequest
     */
    currencyId?: string;
    /**
     * The address of the collection (ERC1155) for the items to withdraw from the shop. If no currencyAddress and no collectionAddress is provided, the native token held by the shop will be withdrawn.
     * @type {string}
     * @memberof WithdrawFromShopRequest
     */
    collectionAddress?: string;
    /**
     * A valid MetaFab collection id that represents the collection for the items to withdraw from the shop. `collectionAddress` or `collectionId` can be provided when withdrawing items.
     * @type {string}
     * @memberof WithdrawFromShopRequest
     */
    collectionId?: string;
    /**
     * The specific itemIds of the provided collection to withdraw from the shop.
     * @type {Array<number>}
     * @memberof WithdrawFromShopRequest
     */
    itemIds?: Array<number>;
}

/**
 * Check if a given object implements the WithdrawFromShopRequest interface.
 */
export function instanceOfWithdrawFromShopRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WithdrawFromShopRequestFromJSON(json: any): WithdrawFromShopRequest {
    return WithdrawFromShopRequestFromJSONTyped(json, false);
}

export function WithdrawFromShopRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WithdrawFromShopRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': !exists(json, 'address') ? undefined : json['address'],
        'walletId': !exists(json, 'walletId') ? undefined : json['walletId'],
        'currencyAddress': !exists(json, 'currencyAddress') ? undefined : json['currencyAddress'],
        'currencyId': !exists(json, 'currencyId') ? undefined : json['currencyId'],
        'collectionAddress': !exists(json, 'collectionAddress') ? undefined : json['collectionAddress'],
        'collectionId': !exists(json, 'collectionId') ? undefined : json['collectionId'],
        'itemIds': !exists(json, 'itemIds') ? undefined : json['itemIds'],
    };
}

export function WithdrawFromShopRequestToJSON(value?: WithdrawFromShopRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'walletId': value.walletId,
        'currencyAddress': value.currencyAddress,
        'currencyId': value.currencyId,
        'collectionAddress': value.collectionAddress,
        'collectionId': value.collectionId,
        'itemIds': value.itemIds,
    };
}

