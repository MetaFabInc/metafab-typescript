/* tslint:disable */
/* eslint-disable */
/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CreateCurrency200ResponseAllOfContract } from './CreateCurrency200ResponseAllOfContract';
import {
    CreateCurrency200ResponseAllOfContractFromJSON,
    CreateCurrency200ResponseAllOfContractFromJSONTyped,
    CreateCurrency200ResponseAllOfContractToJSON,
} from './CreateCurrency200ResponseAllOfContract';

/**
 * 
 * @export
 * @interface CreateCurrency200ResponseAllOf
 */
export interface CreateCurrency200ResponseAllOf {
    /**
     * 
     * @type {CreateCurrency200ResponseAllOfContract}
     * @memberof CreateCurrency200ResponseAllOf
     */
    contract?: CreateCurrency200ResponseAllOfContract;
}

/**
 * Check if a given object implements the CreateCurrency200ResponseAllOf interface.
 */
export function instanceOfCreateCurrency200ResponseAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateCurrency200ResponseAllOfFromJSON(json: any): CreateCurrency200ResponseAllOf {
    return CreateCurrency200ResponseAllOfFromJSONTyped(json, false);
}

export function CreateCurrency200ResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCurrency200ResponseAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contract': !exists(json, 'contract') ? undefined : CreateCurrency200ResponseAllOfContractFromJSON(json['contract']),
    };
}

export function CreateCurrency200ResponseAllOfToJSON(value?: CreateCurrency200ResponseAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contract': CreateCurrency200ResponseAllOfContractToJSON(value.contract),
    };
}

