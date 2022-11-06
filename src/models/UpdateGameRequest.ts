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
 * @interface UpdateGameRequest
 */
export interface UpdateGameRequest {
    /**
     * A new name. Replaces the game's current name.
     * @type {string}
     * @memberof UpdateGameRequest
     */
    name?: string;
    /**
     * A new email address. The game's old email will no longer be valid for account authentication. `currentPassword` must also be provided.
     * @type {string}
     * @memberof UpdateGameRequest
     */
    email?: string;
    /**
     * The game's current password. Must be provided if setting `newPassword` or `email`.
     * @type {string}
     * @memberof UpdateGameRequest
     */
    currentPassword?: string;
    /**
     * A new password. The game's old password will no longer be valid.
     * @type {string}
     * @memberof UpdateGameRequest
     */
    newPassword?: string;
    /**
     * Sets a custom RPC for your game to use instead of MetaFab's default RPCs for the chain(s) you specify.
     * 
     * Expects a JSON object containing key value pairs of supported `chain` -> `rpc url`. Only the chain names provided as keys in the object will be explicitly overriden. To delete a custom RPC for your game, provide the chain name to delete as a key in the provided object and `null` as the value.
     * 
     * Set RPC example, `{ MATIC: 'https://polygon-rpc.com' }`
     * Delete RPC example, `{ MATIC: null }`
     * @type {{ [key: string]: string; }}
     * @memberof UpdateGameRequest
     */
    rpcs?: { [key: string]: string; };
    /**
     * Revokes the game's previous published key and returns a new one if true.
     * @type {boolean}
     * @memberof UpdateGameRequest
     */
    resetPublishedKey?: boolean;
    /**
     * Revokes the game's previous secret key and returns a new on if true.
     * @type {boolean}
     * @memberof UpdateGameRequest
     */
    resetSecretKey?: boolean;
}

/**
 * Check if a given object implements the UpdateGameRequest interface.
 */
export function instanceOfUpdateGameRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateGameRequestFromJSON(json: any): UpdateGameRequest {
    return UpdateGameRequestFromJSONTyped(json, false);
}

export function UpdateGameRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateGameRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'currentPassword': !exists(json, 'currentPassword') ? undefined : json['currentPassword'],
        'newPassword': !exists(json, 'newPassword') ? undefined : json['newPassword'],
        'rpcs': !exists(json, 'rpcs') ? undefined : json['rpcs'],
        'resetPublishedKey': !exists(json, 'resetPublishedKey') ? undefined : json['resetPublishedKey'],
        'resetSecretKey': !exists(json, 'resetSecretKey') ? undefined : json['resetSecretKey'],
    };
}

export function UpdateGameRequestToJSON(value?: UpdateGameRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'email': value.email,
        'currentPassword': value.currentPassword,
        'newPassword': value.newPassword,
        'rpcs': value.rpcs,
        'resetPublishedKey': value.resetPublishedKey,
        'resetSecretKey': value.resetSecretKey,
    };
}

