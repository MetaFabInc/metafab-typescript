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
import type { ContractModel } from './ContractModel';
import {
    ContractModelFromJSON,
    ContractModelFromJSONTyped,
    ContractModelToJSON,
} from './ContractModel';

/**
 * 
 * @export
 * @interface GetCurrencies200ResponseInnerAllOf
 */
export interface GetCurrencies200ResponseInnerAllOf {
    /**
     * 
     * @type {ContractModel}
     * @memberof GetCurrencies200ResponseInnerAllOf
     */
    contract?: ContractModel;
}

/**
 * Check if a given object implements the GetCurrencies200ResponseInnerAllOf interface.
 */
export function instanceOfGetCurrencies200ResponseInnerAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetCurrencies200ResponseInnerAllOfFromJSON(json: any): GetCurrencies200ResponseInnerAllOf {
    return GetCurrencies200ResponseInnerAllOfFromJSONTyped(json, false);
}

export function GetCurrencies200ResponseInnerAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCurrencies200ResponseInnerAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contract': !exists(json, 'contract') ? undefined : ContractModelFromJSON(json['contract']),
    };
}

export function GetCurrencies200ResponseInnerAllOfToJSON(value?: GetCurrencies200ResponseInnerAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contract': ContractModelToJSON(value.contract),
    };
}

