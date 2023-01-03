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
 * @interface UpgradeContractTrustedForwarderRequest
 */
export interface UpgradeContractTrustedForwarderRequest {
    /**
     * A ERC2771 forwarder smart contract address to assign as the new trusted forwarder of the target smart contract.
     * @type {string}
     * @memberof UpgradeContractTrustedForwarderRequest
     */
    forwarderAddress: string;
}

/**
 * Check if a given object implements the UpgradeContractTrustedForwarderRequest interface.
 */
export function instanceOfUpgradeContractTrustedForwarderRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "forwarderAddress" in value;

    return isInstance;
}

export function UpgradeContractTrustedForwarderRequestFromJSON(json: any): UpgradeContractTrustedForwarderRequest {
    return UpgradeContractTrustedForwarderRequestFromJSONTyped(json, false);
}

export function UpgradeContractTrustedForwarderRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpgradeContractTrustedForwarderRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'forwarderAddress': json['forwarderAddress'],
    };
}

export function UpgradeContractTrustedForwarderRequestToJSON(value?: UpgradeContractTrustedForwarderRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'forwarderAddress': value.forwarderAddress,
    };
}
