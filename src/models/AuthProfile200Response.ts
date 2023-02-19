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
import type { WalletModel } from './WalletModel';
import {
    WalletModelFromJSON,
    WalletModelFromJSONTyped,
    WalletModelToJSON,
} from './WalletModel';

/**
 * 
 * @export
 * @interface AuthProfile200Response
 */
export interface AuthProfile200Response {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AuthProfile200Response
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AuthProfile200Response
     */
    ecosystemId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AuthProfile200Response
     */
    walletId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AuthProfile200Response
     */
    connectedWalletId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AuthProfile200Response
     */
    username?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AuthProfile200Response
     */
    accessToken?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AuthProfile200Response
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AuthProfile200Response
     */
    createdAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AuthProfile200Response
     */
    walletDecryptKey?: string;
    /**
     * 
     * @type {WalletModel}
     * @memberof AuthProfile200Response
     */
    wallet?: WalletModel;
    /**
     * 
     * @type {WalletModel}
     * @memberof AuthProfile200Response
     */
    custodialWallet?: WalletModel;
}

/**
 * Check if a given object implements the AuthProfile200Response interface.
 */
export function instanceOfAuthProfile200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuthProfile200ResponseFromJSON(json: any): AuthProfile200Response {
    return AuthProfile200ResponseFromJSONTyped(json, false);
}

export function AuthProfile200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthProfile200Response {
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
        'walletDecryptKey': !exists(json, 'walletDecryptKey') ? undefined : json['walletDecryptKey'],
        'wallet': !exists(json, 'wallet') ? undefined : WalletModelFromJSON(json['wallet']),
        'custodialWallet': !exists(json, 'custodialWallet') ? undefined : WalletModelFromJSON(json['custodialWallet']),
    };
}

export function AuthProfile200ResponseToJSON(value?: AuthProfile200Response | null): any {
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
        'walletDecryptKey': value.walletDecryptKey,
        'wallet': WalletModelToJSON(value.wallet),
        'custodialWallet': WalletModelToJSON(value.custodialWallet),
    };
}

