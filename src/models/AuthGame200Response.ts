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
 * @interface AuthGame200Response
 */
export interface AuthGame200Response {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AuthGame200Response
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AuthGame200Response
     */
    walletId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AuthGame200Response
     */
    fundingWalletId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AuthGame200Response
     */
    email?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AuthGame200Response
     */
    name?: string;
    /**
     * This field has not had a description added.
     * @type {object}
     * @memberof AuthGame200Response
     */
    rpcs?: object;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AuthGame200Response
     */
    publishedKey?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AuthGame200Response
     */
    secretKey?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AuthGame200Response
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof AuthGame200Response
     */
    createdAt?: string;
    /**
     * 
     * @type {WalletModel}
     * @memberof AuthGame200Response
     */
    wallet?: WalletModel;
    /**
     * 
     * @type {WalletModel}
     * @memberof AuthGame200Response
     */
    fundingWallet?: WalletModel;
}

/**
 * Check if a given object implements the AuthGame200Response interface.
 */
export function instanceOfAuthGame200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuthGame200ResponseFromJSON(json: any): AuthGame200Response {
    return AuthGame200ResponseFromJSONTyped(json, false);
}

export function AuthGame200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthGame200Response {
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
        'wallet': !exists(json, 'wallet') ? undefined : WalletModelFromJSON(json['wallet']),
        'fundingWallet': !exists(json, 'fundingWallet') ? undefined : WalletModelFromJSON(json['fundingWallet']),
    };
}

export function AuthGame200ResponseToJSON(value?: AuthGame200Response | null): any {
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
        'wallet': WalletModelToJSON(value.wallet),
        'fundingWallet': WalletModelToJSON(value.fundingWallet),
    };
}

