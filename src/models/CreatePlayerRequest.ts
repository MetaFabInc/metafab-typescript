/* tslint:disable */
/* eslint-disable */
/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.2.0
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
 * @interface CreatePlayerRequest
 */
export interface CreatePlayerRequest {
    /**
     * The players username, used to authenticate the player and if desired represent them in game. Usernames are unique. There cannot be 2 users with the same username created for a game.
     * @type {string}
     * @memberof CreatePlayerRequest
     */
    username: string;
    /**
     * The password to authenticate as the player. Additionally, this password is used to encrypt/decrypt a player's primary wallet and must be provided anytime this player makes blockchain interactions through various endpoints.
     * @type {string}
     * @memberof CreatePlayerRequest
     */
    password: string;
}

/**
 * Check if a given object implements the CreatePlayerRequest interface.
 */
export function instanceOfCreatePlayerRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "password" in value;

    return isInstance;
}

export function CreatePlayerRequestFromJSON(json: any): CreatePlayerRequest {
    return CreatePlayerRequestFromJSONTyped(json, false);
}

export function CreatePlayerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatePlayerRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'username': json['username'],
        'password': json['password'],
    };
}

export function CreatePlayerRequestToJSON(value?: CreatePlayerRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'password': value.password,
    };
}

