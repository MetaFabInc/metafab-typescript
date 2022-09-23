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
 * @interface AuthGame200ResponseAllOf1
 */
export interface AuthGame200ResponseAllOf1 {
    /**
     * 
     * @type {WalletModel}
     * @memberof AuthGame200ResponseAllOf1
     */
    fundingWallet?: WalletModel;
}

/**
 * Check if a given object implements the AuthGame200ResponseAllOf1 interface.
 */
export function instanceOfAuthGame200ResponseAllOf1(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuthGame200ResponseAllOf1FromJSON(json: any): AuthGame200ResponseAllOf1 {
    return AuthGame200ResponseAllOf1FromJSONTyped(json, false);
}

export function AuthGame200ResponseAllOf1FromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthGame200ResponseAllOf1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fundingWallet': !exists(json, 'fundingWallet') ? undefined : WalletModelFromJSON(json['fundingWallet']),
    };
}

export function AuthGame200ResponseAllOf1ToJSON(value?: AuthGame200ResponseAllOf1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fundingWallet': WalletModelToJSON(value.fundingWallet),
    };
}

