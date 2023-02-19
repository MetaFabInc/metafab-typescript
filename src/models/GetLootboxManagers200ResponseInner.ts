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
import type { ContractModel } from './ContractModel';
import {
    ContractModelFromJSON,
    ContractModelFromJSONTyped,
    ContractModelToJSON,
} from './ContractModel';

/**
 * 
 * @export
 * @interface GetLootboxManagers200ResponseInner
 */
export interface GetLootboxManagers200ResponseInner {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetLootboxManagers200ResponseInner
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetLootboxManagers200ResponseInner
     */
    gameId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetLootboxManagers200ResponseInner
     */
    contractId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetLootboxManagers200ResponseInner
     */
    name?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetLootboxManagers200ResponseInner
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GetLootboxManagers200ResponseInner
     */
    createdAt?: string;
    /**
     * 
     * @type {ContractModel}
     * @memberof GetLootboxManagers200ResponseInner
     */
    contract?: ContractModel;
}

/**
 * Check if a given object implements the GetLootboxManagers200ResponseInner interface.
 */
export function instanceOfGetLootboxManagers200ResponseInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetLootboxManagers200ResponseInnerFromJSON(json: any): GetLootboxManagers200ResponseInner {
    return GetLootboxManagers200ResponseInnerFromJSONTyped(json, false);
}

export function GetLootboxManagers200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetLootboxManagers200ResponseInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'gameId': !exists(json, 'gameId') ? undefined : json['gameId'],
        'contractId': !exists(json, 'contractId') ? undefined : json['contractId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'contract': !exists(json, 'contract') ? undefined : ContractModelFromJSON(json['contract']),
    };
}

export function GetLootboxManagers200ResponseInnerToJSON(value?: GetLootboxManagers200ResponseInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'gameId': value.gameId,
        'contractId': value.contractId,
        'name': value.name,
        'updatedAt': value.updatedAt,
        'createdAt': value.createdAt,
        'contract': ContractModelToJSON(value.contract),
    };
}

