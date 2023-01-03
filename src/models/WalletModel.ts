/* tslint:disable */
/* eslint-disable */
/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.4.1
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
 * @interface WalletModel
 */
export interface WalletModel {
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof WalletModel
     */
    id?: string;
    /**
     * This field has not had a description added.
     * @type {string}
     * @memberof WalletModel
     */
    address?: string;
}

/**
 * Check if a given object implements the WalletModel interface.
 */
export function instanceOfWalletModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WalletModelFromJSON(json: any): WalletModel {
    return WalletModelFromJSONTyped(json, false);
}

export function WalletModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): WalletModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'address': !exists(json, 'address') ? undefined : json['address'],
    };
}

export function WalletModelToJSON(value?: WalletModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'address': value.address,
    };
}

