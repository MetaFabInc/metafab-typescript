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
import type { PublicPlayerWallet } from './PublicPlayerWallet';
import {
    PublicPlayerWalletFromJSON,
    PublicPlayerWalletFromJSONTyped,
    PublicPlayerWalletToJSON,
} from './PublicPlayerWallet';

/**
 * 
 * @export
 * @interface PublicPlayer
 */
export interface PublicPlayer {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PublicPlayer
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PublicPlayer
     */
    gameId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PublicPlayer
     */
    walletId?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PublicPlayer
     */
    username?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PublicPlayer
     */
    updatedAt?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof PublicPlayer
     */
    createdAt?: string;
    /**
     * 
     * @type {PublicPlayerWallet}
     * @memberof PublicPlayer
     */
    wallet?: PublicPlayerWallet;
}

/**
 * Check if a given object implements the PublicPlayer interface.
 */
export function instanceOfPublicPlayer(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PublicPlayerFromJSON(json: any): PublicPlayer {
    return PublicPlayerFromJSONTyped(json, false);
}

export function PublicPlayerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicPlayer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'gameId': !exists(json, 'gameId') ? undefined : json['gameId'],
        'walletId': !exists(json, 'walletId') ? undefined : json['walletId'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'wallet': !exists(json, 'wallet') ? undefined : PublicPlayerWalletFromJSON(json['wallet']),
    };
}

export function PublicPlayerToJSON(value?: PublicPlayer | null): any {
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
        'updatedAt': value.updatedAt,
        'createdAt': value.createdAt,
        'wallet': PublicPlayerWalletToJSON(value.wallet),
    };
}

