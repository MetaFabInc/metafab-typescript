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
/**
 * 
 * @export
 * @interface WriteContractRequest
 */
export interface WriteContractRequest {
    /**
     * A contract function name. This can be any valid function from the the ABI of the contract you are interacting with. For example, `mint`.
     * @type {string}
     * @memberof WriteContractRequest
     */
    func: string;
    /**
     * An array of args. This is optional and only necessary if the function being invoked requires arguments per the contract ABI. For example, `[123, "Hello", false]`.
     * @type {string}
     * @memberof WriteContractRequest
     */
    args?: string;
}

/**
 * Check if a given object implements the WriteContractRequest interface.
 */
export function instanceOfWriteContractRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "func" in value;

    return isInstance;
}

export function WriteContractRequestFromJSON(json: any): WriteContractRequest {
    return WriteContractRequestFromJSONTyped(json, false);
}

export function WriteContractRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WriteContractRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'func': json['func'],
        'args': !exists(json, 'args') ? undefined : json['args'],
    };
}

export function WriteContractRequestToJSON(value?: WriteContractRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'func': value.func,
        'args': value.args,
    };
}
