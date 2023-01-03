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
import type { TransactionModel } from './TransactionModel';
import {
    TransactionModelFromJSON,
    TransactionModelFromJSONTyped,
    TransactionModelToJSON,
} from './TransactionModel';

/**
 * 
 * @export
 * @interface CreateCollection200ResponseAllOfContractAllOf
 */
export interface CreateCollection200ResponseAllOfContractAllOf {
    /**
     * 
     * @type {Array<TransactionModel>}
     * @memberof CreateCollection200ResponseAllOfContractAllOf
     */
    transactions?: Array<TransactionModel>;
}

/**
 * Check if a given object implements the CreateCollection200ResponseAllOfContractAllOf interface.
 */
export function instanceOfCreateCollection200ResponseAllOfContractAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateCollection200ResponseAllOfContractAllOfFromJSON(json: any): CreateCollection200ResponseAllOfContractAllOf {
    return CreateCollection200ResponseAllOfContractAllOfFromJSONTyped(json, false);
}

export function CreateCollection200ResponseAllOfContractAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCollection200ResponseAllOfContractAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transactions': !exists(json, 'transactions') ? undefined : ((json['transactions'] as Array<any>).map(TransactionModelFromJSON)),
    };
}

export function CreateCollection200ResponseAllOfContractAllOfToJSON(value?: CreateCollection200ResponseAllOfContractAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'transactions': value.transactions === undefined ? undefined : ((value.transactions as Array<any>).map(TransactionModelToJSON)),
    };
}

