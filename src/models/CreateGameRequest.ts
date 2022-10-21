/* tslint:disable */
/* eslint-disable */
/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.1.3
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
 * @interface CreateGameRequest
 */
export interface CreateGameRequest {
    /**
     * The name of the game you're creating.
     * @type {string}
     * @memberof CreateGameRequest
     */
    name: string;
    /**
     * The email address associated with this game and used to login/authenticate as the game.
     * @type {string}
     * @memberof CreateGameRequest
     */
    email: string;
    /**
     * The password to authenticate as the game. Additionally, this password is used to encrypt/decrypt your game's primary wallet and must be provided anytime this game makes blockchain interactions through various endpoints.
     * @type {string}
     * @memberof CreateGameRequest
     */
    password: string;
}

/**
 * Check if a given object implements the CreateGameRequest interface.
 */
export function instanceOfCreateGameRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "password" in value;

    return isInstance;
}

export function CreateGameRequestFromJSON(json: any): CreateGameRequest {
    return CreateGameRequestFromJSONTyped(json, false);
}

export function CreateGameRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateGameRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'email': json['email'],
        'password': json['password'],
    };
}

export function CreateGameRequestToJSON(value?: CreateGameRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'email': value.email,
        'password': value.password,
    };
}

