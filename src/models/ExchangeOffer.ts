/* tslint:disable */
/* eslint-disable */
/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.1.43
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
 * @interface ExchangeOffer
 */
export interface ExchangeOffer {
    /**
     * The id of this offer.
     * @type {number}
     * @memberof ExchangeOffer
     */
    id?: number;
    /**
     * The address of the ERC1155 of MetaFab game items contract for input items required by this offer.
     * @type {string}
     * @memberof ExchangeOffer
     */
    inputCollection?: string;
    /**
     * An array of item ids from the input collection that are required for this offer.
     * @type {Array<number>}
     * @memberof ExchangeOffer
     */
    inputCollectionItemIds?: Array<number>;
    /**
     * An array of amounts for each item id for the input collection that are required to use this offer.
     * @type {Array<number>}
     * @memberof ExchangeOffer
     */
    inputCollectionItemAmounts?: Array<number>;
    /**
     * The address of the ERC20 or MetaFab game currency for the currency required by this offer.
     * @type {string}
     * @memberof ExchangeOffer
     */
    inputCurrency?: string;
    /**
     * The amount of currency required by this offer.
     * @type {number}
     * @memberof ExchangeOffer
     */
    inputCurrencyAmount?: number;
    /**
     * The address of the ERC1155 of MetaFab game items contract for output items given by this offer.
     * @type {string}
     * @memberof ExchangeOffer
     */
    outputCollection?: string;
    /**
     * An array of item ids from the output collection that are given for this offer.
     * @type {Array<number>}
     * @memberof ExchangeOffer
     */
    outputCollectionItemIds?: Array<number>;
    /**
     * An array of amounts for each item id for the output collection that are given by this offer.
     * @type {Array<number>}
     * @memberof ExchangeOffer
     */
    outputCollectionItemAmounts?: Array<number>;
    /**
     * The address of the ERC20 or MetaFab game currency for the output currency given by this offer.
     * @type {string}
     * @memberof ExchangeOffer
     */
    outputCurrency?: string;
    /**
     * The amount of currency given by this offer.
     * @type {number}
     * @memberof ExchangeOffer
     */
    outputCurrencyAmount?: number;
    /**
     * The number of times this offer has been used.
     * @type {number}
     * @memberof ExchangeOffer
     */
    uses?: number;
    /**
     * The maximum number of times this offer can be used. A value of `0` means there is no limit on how many times this offer can be used.
     * @type {number}
     * @memberof ExchangeOffer
     */
    maxUses?: number;
    /**
     * A unix timestamp in seconds that represents the last time this offer was set or updated.
     * @type {number}
     * @memberof ExchangeOffer
     */
    lastUpdatedAt?: number;
}

/**
 * Check if a given object implements the ExchangeOffer interface.
 */
export function instanceOfExchangeOffer(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExchangeOfferFromJSON(json: any): ExchangeOffer {
    return ExchangeOfferFromJSONTyped(json, false);
}

export function ExchangeOfferFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExchangeOffer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'inputCollection': !exists(json, 'inputCollection') ? undefined : json['inputCollection'],
        'inputCollectionItemIds': !exists(json, 'inputCollectionItemIds') ? undefined : json['inputCollectionItemIds'],
        'inputCollectionItemAmounts': !exists(json, 'inputCollectionItemAmounts') ? undefined : json['inputCollectionItemAmounts'],
        'inputCurrency': !exists(json, 'inputCurrency') ? undefined : json['inputCurrency'],
        'inputCurrencyAmount': !exists(json, 'inputCurrencyAmount') ? undefined : json['inputCurrencyAmount'],
        'outputCollection': !exists(json, 'outputCollection') ? undefined : json['outputCollection'],
        'outputCollectionItemIds': !exists(json, 'outputCollectionItemIds') ? undefined : json['outputCollectionItemIds'],
        'outputCollectionItemAmounts': !exists(json, 'outputCollectionItemAmounts') ? undefined : json['outputCollectionItemAmounts'],
        'outputCurrency': !exists(json, 'outputCurrency') ? undefined : json['outputCurrency'],
        'outputCurrencyAmount': !exists(json, 'outputCurrencyAmount') ? undefined : json['outputCurrencyAmount'],
        'uses': !exists(json, 'uses') ? undefined : json['uses'],
        'maxUses': !exists(json, 'maxUses') ? undefined : json['maxUses'],
        'lastUpdatedAt': !exists(json, 'lastUpdatedAt') ? undefined : json['lastUpdatedAt'],
    };
}

export function ExchangeOfferToJSON(value?: ExchangeOffer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'inputCollection': value.inputCollection,
        'inputCollectionItemIds': value.inputCollectionItemIds,
        'inputCollectionItemAmounts': value.inputCollectionItemAmounts,
        'inputCurrency': value.inputCurrency,
        'inputCurrencyAmount': value.inputCurrencyAmount,
        'outputCollection': value.outputCollection,
        'outputCollectionItemIds': value.outputCollectionItemIds,
        'outputCollectionItemAmounts': value.outputCollectionItemAmounts,
        'outputCurrency': value.outputCurrency,
        'outputCurrencyAmount': value.outputCurrencyAmount,
        'uses': value.uses,
        'maxUses': value.maxUses,
        'lastUpdatedAt': value.lastUpdatedAt,
    };
}

