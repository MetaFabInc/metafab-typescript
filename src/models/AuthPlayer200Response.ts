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
import type { WalletModel } from './WalletModel';
import {
    WalletModelFromJSON,
    WalletModelFromJSONTyped,
    WalletModelToJSON,
} from './WalletModel';

/**
 * 
 * @export
 * @interface AuthPlayer200Response
 */
export interface AuthPlayer200Response {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AuthPlayer200Response
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AuthPlayer200Response
     */
    gameId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AuthPlayer200Response
     */
    walletId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AuthPlayer200Response
     */
    username?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AuthPlayer200Response
     */
    accessToken?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AuthPlayer200Response
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AuthPlayer200Response
     */
    createdAt?: string;
    /**
     * 
     * @type {WalletModel}
     * @memberof AuthPlayer200Response
     */
    wallet?: WalletModel;
}

/**
 * Check if a given object implements the AuthPlayer200Response interface.
 */
export function instanceOfAuthPlayer200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuthPlayer200ResponseFromJSON(json: any): AuthPlayer200Response {
    return AuthPlayer200ResponseFromJSONTyped(json, false);
}

export function AuthPlayer200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthPlayer200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'gameId': !exists(json, 'gameId') ? undefined : json['gameId'],
        'walletId': !exists(json, 'walletId') ? undefined : json['walletId'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'wallet': !exists(json, 'wallet') ? undefined : WalletModelFromJSON(json['wallet']),
    };
}

export function AuthPlayer200ResponseToJSON(value?: AuthPlayer200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'gameId': value.gameId,
        'walletId': value.walletId,
        'username': value.username,
        'accessToken': value.accessToken,
        'updatedAt': value.updatedAt,
        'createdAt': value.createdAt,
        'wallet': WalletModelToJSON(value.wallet),
    };
}

