/* tslint:disable */
/* eslint-disable */
/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.2.1
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
 * @interface GameModel
 */
export interface GameModel {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GameModel
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GameModel
     */
    walletId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GameModel
     */
    fundingWalletId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GameModel
     */
    email?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GameModel
     */
    name?: string;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof GameModel
     */
    rpcs?: object;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GameModel
     */
    publishedKey?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GameModel
     */
    secretKey?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GameModel
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof GameModel
     */
    createdAt?: string;
}

/**
 * Check if a given object implements the GameModel interface.
 */
export function instanceOfGameModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameModelFromJSON(json: any): GameModel {
    return GameModelFromJSONTyped(json, false);
}

export function GameModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'walletId': !exists(json, 'walletId') ? undefined : json['walletId'],
        'fundingWalletId': !exists(json, 'fundingWalletId') ? undefined : json['fundingWalletId'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'rpcs': !exists(json, 'rpcs') ? undefined : json['rpcs'],
        'publishedKey': !exists(json, 'publishedKey') ? undefined : json['publishedKey'],
        'secretKey': !exists(json, 'secretKey') ? undefined : json['secretKey'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
    };
}

export function GameModelToJSON(value?: GameModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'walletId': value.walletId,
        'fundingWalletId': value.fundingWalletId,
        'email': value.email,
        'name': value.name,
        'rpcs': value.rpcs,
        'publishedKey': value.publishedKey,
        'secretKey': value.secretKey,
        'updatedAt': value.updatedAt,
        'createdAt': value.createdAt,
    };
}

