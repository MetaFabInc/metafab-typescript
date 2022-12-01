/* tslint:disable */
/* eslint-disable */
/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.3.0
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CreateCollection200ResponseAllOfContract } from './CreateCollection200ResponseAllOfContract';
import {
    CreateCollection200ResponseAllOfContractFromJSON,
    CreateCollection200ResponseAllOfContractFromJSONTyped,
    CreateCollection200ResponseAllOfContractToJSON,
} from './CreateCollection200ResponseAllOfContract';

/**
 * 
 * @export
 * @interface CreateLootboxManager200Response
 */
export interface CreateLootboxManager200Response {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateLootboxManager200Response
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateLootboxManager200Response
     */
    gameId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateLootboxManager200Response
     */
    contractId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateLootboxManager200Response
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CreateLootboxManager200Response
     */
    createdAt?: string;
    /**
     * 
     * @type {CreateCollection200ResponseAllOfContract}
     * @memberof CreateLootboxManager200Response
     */
    contract?: CreateCollection200ResponseAllOfContract;
}

/**
 * Check if a given object implements the CreateLootboxManager200Response interface.
 */
export function instanceOfCreateLootboxManager200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateLootboxManager200ResponseFromJSON(json: any): CreateLootboxManager200Response {
    return CreateLootboxManager200ResponseFromJSONTyped(json, false);
}

export function CreateLootboxManager200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateLootboxManager200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'gameId': !exists(json, 'gameId') ? undefined : json['gameId'],
        'contractId': !exists(json, 'contractId') ? undefined : json['contractId'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'contract': !exists(json, 'contract') ? undefined : CreateCollection200ResponseAllOfContractFromJSON(json['contract']),
    };
}

export function CreateLootboxManager200ResponseToJSON(value?: CreateLootboxManager200Response | null): any {
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
        'updatedAt': value.updatedAt,
        'createdAt': value.createdAt,
        'contract': CreateCollection200ResponseAllOfContractToJSON(value.contract),
    };
}

