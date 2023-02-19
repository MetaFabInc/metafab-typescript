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
/**
 * 
 * @export
 * @interface ProfileModel
 */
export interface ProfileModel {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof ProfileModel
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof ProfileModel
     */
    ecosystemId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof ProfileModel
     */
    walletId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof ProfileModel
     */
    connectedWalletId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof ProfileModel
     */
    username?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof ProfileModel
     */
    accessToken?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof ProfileModel
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof ProfileModel
     */
    createdAt?: string;
}

/**
 * Check if a given object implements the ProfileModel interface.
 */
export function instanceOfProfileModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileModelFromJSON(json: any): ProfileModel {
    return ProfileModelFromJSONTyped(json, false);
}

export function ProfileModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'ecosystemId': !exists(json, 'ecosystemId') ? undefined : json['ecosystemId'],
        'walletId': !exists(json, 'walletId') ? undefined : json['walletId'],
        'connectedWalletId': !exists(json, 'connectedWalletId') ? undefined : json['connectedWalletId'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
    };
}

export function ProfileModelToJSON(value?: ProfileModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'ecosystemId': value.ecosystemId,
        'walletId': value.walletId,
        'connectedWalletId': value.connectedWalletId,
        'username': value.username,
        'accessToken': value.accessToken,
        'updatedAt': value.updatedAt,
        'createdAt': value.createdAt,
    };
}

