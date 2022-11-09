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
 * @interface GrantCollectionRoleRequest
 */
export interface GrantCollectionRoleRequest {
    /**
     * A valid MetaFab role or bytes string representing a role, such as `minter` or `0xc9eb32e43bf5ecbceacf00b32281dfc5d6d700a0db676ea26ccf938a385ac3b7`
     * @type {string}
     * @memberof GrantCollectionRoleRequest
     */
    role: string;
    /**
     * A valid EVM based address grant the role to.
     * @type {string}
     * @memberof GrantCollectionRoleRequest
     */
    address?: string;
    /**
     * A wallet id within the MetaFab ecosystem to grant the role to.
     * @type {Array<string>}
     * @memberof GrantCollectionRoleRequest
     */
    walletId?: Array<string>;
}

/**
 * Check if a given object implements the GrantCollectionRoleRequest interface.
 */
export function instanceOfGrantCollectionRoleRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "role" in value;

    return isInstance;
}

export function GrantCollectionRoleRequestFromJSON(json: any): GrantCollectionRoleRequest {
    return GrantCollectionRoleRequestFromJSONTyped(json, false);
}

export function GrantCollectionRoleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GrantCollectionRoleRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'role': json['role'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'walletId': !exists(json, 'walletId') ? undefined : json['walletId'],
    };
}

export function GrantCollectionRoleRequestToJSON(value?: GrantCollectionRoleRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'role': value.role,
        'address': value.address,
        'walletId': value.walletId,
    };
}

