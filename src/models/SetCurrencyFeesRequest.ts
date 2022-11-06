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
 * @interface SetCurrencyFeesRequest
 */
export interface SetCurrencyFeesRequest {
    /**
     * The recipient address of currency transaction fees.
     * @type {string}
     * @memberof SetCurrencyFeesRequest
     */
    recipientAddress: string;
    /**
     * A percentage fee for every transaction represented in basis points. To set a 1.5% fee, you would use a value of 150. This value can be 0, denoting no percentage fees.
     * @type {number}
     * @memberof SetCurrencyFeesRequest
     */
    basisPoints: number;
    /**
     * A fixed fee for every transaction. A value of 0.5 would mean 0.5 of the currency of a transaction is always taken as a fee. This value can be 0, denoting no fixed fees.
     * @type {number}
     * @memberof SetCurrencyFeesRequest
     */
    fixedAmount: number;
    /**
     * The maximum fee amount for any single transaction. The total fee of a transaction is calculated as the sum of the basis points (percentage) fee, and fixed fee. If a calculated fee is greater than this maximum fee value, the maximum fee will be used instead.
     * @type {number}
     * @memberof SetCurrencyFeesRequest
     */
    capAmount: number;
}

/**
 * Check if a given object implements the SetCurrencyFeesRequest interface.
 */
export function instanceOfSetCurrencyFeesRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "recipientAddress" in value;
    isInstance = isInstance && "basisPoints" in value;
    isInstance = isInstance && "fixedAmount" in value;
    isInstance = isInstance && "capAmount" in value;

    return isInstance;
}

export function SetCurrencyFeesRequestFromJSON(json: any): SetCurrencyFeesRequest {
    return SetCurrencyFeesRequestFromJSONTyped(json, false);
}

export function SetCurrencyFeesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetCurrencyFeesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'recipientAddress': json['recipientAddress'],
        'basisPoints': json['basisPoints'],
        'fixedAmount': json['fixedAmount'],
        'capAmount': json['capAmount'],
    };
}

export function SetCurrencyFeesRequestToJSON(value?: SetCurrencyFeesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'recipientAddress': value.recipientAddress,
        'basisPoints': value.basisPoints,
        'fixedAmount': value.fixedAmount,
        'capAmount': value.capAmount,
    };
}

