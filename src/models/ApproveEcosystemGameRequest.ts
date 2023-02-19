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
 * @interface ApproveEcosystemGameRequest
 */
export interface ApproveEcosystemGameRequest {
    /**
     * The id of the game being approved.
     * @type {string}
     * @memberof ApproveEcosystemGameRequest
     */
    gameId: string;
}

/**
 * Check if a given object implements the ApproveEcosystemGameRequest interface.
 */
export function instanceOfApproveEcosystemGameRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "gameId" in value;

    return isInstance;
}

export function ApproveEcosystemGameRequestFromJSON(json: any): ApproveEcosystemGameRequest {
    return ApproveEcosystemGameRequestFromJSONTyped(json, false);
}

export function ApproveEcosystemGameRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApproveEcosystemGameRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gameId': json['gameId'],
    };
}

export function ApproveEcosystemGameRequestToJSON(value?: ApproveEcosystemGameRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gameId': value.gameId,
    };
}

