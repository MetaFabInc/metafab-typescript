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
/**
 * 
 * @export
 * @interface LootboxManagerModel
 */
export interface LootboxManagerModel {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof LootboxManagerModel
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof LootboxManagerModel
     */
    gameId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof LootboxManagerModel
     */
    contractId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof LootboxManagerModel
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof LootboxManagerModel
     */
    createdAt?: string;
}

/**
 * Check if a given object implements the LootboxManagerModel interface.
 */
export function instanceOfLootboxManagerModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LootboxManagerModelFromJSON(json: any): LootboxManagerModel {
    return LootboxManagerModelFromJSONTyped(json, false);
}

export function LootboxManagerModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): LootboxManagerModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'gameId': !exists(json, 'gameId') ? undefined : json['gameId'],
        'contractId': !exists(json, 'contractId') ? undefined : json['contractId'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
    };
}

export function LootboxManagerModelToJSON(value?: LootboxManagerModel | null): any {
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
    };
}

