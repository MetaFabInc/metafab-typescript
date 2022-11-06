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
 * @interface CollectionModel
 */
export interface CollectionModel {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CollectionModel
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CollectionModel
     */
    gameId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CollectionModel
     */
    contractId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CollectionModel
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof CollectionModel
     */
    createdAt?: string;
}

/**
 * Check if a given object implements the CollectionModel interface.
 */
export function instanceOfCollectionModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CollectionModelFromJSON(json: any): CollectionModel {
    return CollectionModelFromJSONTyped(json, false);
}

export function CollectionModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionModel {
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

export function CollectionModelToJSON(value?: CollectionModel | null): any {
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

