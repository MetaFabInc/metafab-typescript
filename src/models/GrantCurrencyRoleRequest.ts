/* tslint:disable */
/* eslint-disable */
/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.1.4
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
 * @interface GrantCurrencyRoleRequest
 */
export interface GrantCurrencyRoleRequest {
    /**
     * A valid MetaFab role or bytes string representing a role, such as `minter` or `0xc9eb32e43bf5ecbceacf00b32281dfc5d6d700a0db676ea26ccf938a385ac3b7`
     * @type {string}
     * @memberof GrantCurrencyRoleRequest
     */
    role: string;
    /**
     * A valid EVM based address to grant the role to.
     * @type {string}
     * @memberof GrantCurrencyRoleRequest
     */
    address?: string;
    /**
     * A wallet id within the MetaFab ecosystem to grant the role to.
     * @type {Array<string>}
     * @memberof GrantCurrencyRoleRequest
     */
    walletId?: Array<string>;
}

/**
 * Check if a given object implements the GrantCurrencyRoleRequest interface.
 */
export function instanceOfGrantCurrencyRoleRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "role" in value;

    return isInstance;
}

export function GrantCurrencyRoleRequestFromJSON(json: any): GrantCurrencyRoleRequest {
    return GrantCurrencyRoleRequestFromJSONTyped(json, false);
}

export function GrantCurrencyRoleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GrantCurrencyRoleRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'role': json['role'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'walletId': !exists(json, 'walletId') ? undefined : json['walletId'],
    };
}

export function GrantCurrencyRoleRequestToJSON(value?: GrantCurrencyRoleRequest | null): any {
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
