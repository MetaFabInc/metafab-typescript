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
import type { TransactionModel } from './TransactionModel';
import {
    TransactionModelFromJSON,
    TransactionModelFromJSONTyped,
    TransactionModelToJSON,
} from './TransactionModel';

/**
 * 
 * @export
 * @interface CreateCurrency200ResponseAllOfContract
 */
export interface CreateCurrency200ResponseAllOfContract {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateCurrency200ResponseAllOfContract
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateCurrency200ResponseAllOfContract
     */
    gameId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateCurrency200ResponseAllOfContract
     */
    chain?: string;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof CreateCurrency200ResponseAllOfContract
     */
    abi?: object;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateCurrency200ResponseAllOfContract
     */
    type?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateCurrency200ResponseAllOfContract
     */
    address?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateCurrency200ResponseAllOfContract
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateCurrency200ResponseAllOfContract
     */
    createdAt?: string;
    /**
     * 
     * @type {Array<TransactionModel>}
     * @memberof CreateCurrency200ResponseAllOfContract
     */
    transactions?: Array<TransactionModel>;
}

/**
 * Check if a given object implements the CreateCurrency200ResponseAllOfContract interface.
 */
export function instanceOfCreateCurrency200ResponseAllOfContract(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateCurrency200ResponseAllOfContractFromJSON(json: any): CreateCurrency200ResponseAllOfContract {
    return CreateCurrency200ResponseAllOfContractFromJSONTyped(json, false);
}

export function CreateCurrency200ResponseAllOfContractFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCurrency200ResponseAllOfContract {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'gameId': !exists(json, 'gameId') ? undefined : json['gameId'],
        'chain': !exists(json, 'chain') ? undefined : json['chain'],
        'abi': !exists(json, 'abi') ? undefined : json['abi'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'transactions': !exists(json, 'transactions') ? undefined : ((json['transactions'] as Array<any>).map(TransactionModelFromJSON)),
    };
}

export function CreateCurrency200ResponseAllOfContractToJSON(value?: CreateCurrency200ResponseAllOfContract | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'gameId': value.gameId,
        'chain': value.chain,
        'abi': value.abi,
        'type': value.type,
        'address': value.address,
        'updatedAt': value.updatedAt,
        'createdAt': value.createdAt,
        'transactions': value.transactions === undefined ? undefined : ((value.transactions as Array<any>).map(TransactionModelToJSON)),
    };
}

