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
/**
 * 
 * @export
 * @interface ContractModel
 */
export interface ContractModel {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof ContractModel
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof ContractModel
     */
    gameId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof ContractModel
     */
    chain?: string;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof ContractModel
     */
    abi?: object;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof ContractModel
     */
    type?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof ContractModel
     */
    address?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof ContractModel
     */
    forwarderAddress?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof ContractModel
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof ContractModel
     */
    createdAt?: string;
}

/**
 * Check if a given object implements the ContractModel interface.
 */
export function instanceOfContractModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ContractModelFromJSON(json: any): ContractModel {
    return ContractModelFromJSONTyped(json, false);
}

export function ContractModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContractModel {
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
    };
}

export function ContractModelToJSON(value?: ContractModel | null): any {
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
    };
}

