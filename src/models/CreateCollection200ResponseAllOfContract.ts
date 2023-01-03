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
 * @interface CreateCollection200ResponseAllOfContract
 */
export interface CreateCollection200ResponseAllOfContract {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateCollection200ResponseAllOfContract
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateCollection200ResponseAllOfContract
     */
    gameId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateCollection200ResponseAllOfContract
     */
    chain?: string;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof CreateCollection200ResponseAllOfContract
     */
    abi?: object;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateCollection200ResponseAllOfContract
     */
    type?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateCollection200ResponseAllOfContract
     */
    address?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateCollection200ResponseAllOfContract
     */
    forwarderAddress?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateCollection200ResponseAllOfContract
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateCollection200ResponseAllOfContract
     */
    createdAt?: string;
    /**
     * 
     * @type {Array<TransactionModel>}
     * @memberof CreateCollection200ResponseAllOfContract
     */
    transactions?: Array<TransactionModel>;
}

/**
 * Check if a given object implements the CreateCollection200ResponseAllOfContract interface.
 */
export function instanceOfCreateCollection200ResponseAllOfContract(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateCollection200ResponseAllOfContractFromJSON(json: any): CreateCollection200ResponseAllOfContract {
    return CreateCollection200ResponseAllOfContractFromJSONTyped(json, false);
}

export function CreateCollection200ResponseAllOfContractFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCollection200ResponseAllOfContract {
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
        'forwarderAddress': !exists(json, 'forwarderAddress') ? undefined : json['forwarderAddress'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'transactions': !exists(json, 'transactions') ? undefined : ((json['transactions'] as Array<any>).map(TransactionModelFromJSON)),
    };
}

export function CreateCollection200ResponseAllOfContractToJSON(value?: CreateCollection200ResponseAllOfContract | null): any {
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
        'forwarderAddress': value.forwarderAddress,
        'updatedAt': value.updatedAt,
        'createdAt': value.createdAt,
        'transactions': value.transactions === undefined ? undefined : ((value.transactions as Array<any>).map(TransactionModelToJSON)),
    };
}

