/* tslint:disable */
/* eslint-disable */
/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.3.0
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
 * @interface SetCollectionApprovalRequest
 */
export interface SetCollectionApprovalRequest {
    /**
     * A true or false value approves or disapproves the provided address or address associated with the provided walletId.
     * @type {boolean}
     * @memberof SetCollectionApprovalRequest
     */
    approved: boolean;
    /**
     * A valid EVM based address to allow control over the authenticating game or player's wallet items for this collection.
     * @type {string}
     * @memberof SetCollectionApprovalRequest
     */
    address?: string;
    /**
     * A wallet id within the MetaFab ecosystem to allow control over the authenticating game or player's wallet items for this collection.
     * @type {Array<string>}
     * @memberof SetCollectionApprovalRequest
     */
    walletId?: Array<string>;
}

/**
 * Check if a given object implements the SetCollectionApprovalRequest interface.
 */
export function instanceOfSetCollectionApprovalRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "approved" in value;

    return isInstance;
}

export function SetCollectionApprovalRequestFromJSON(json: any): SetCollectionApprovalRequest {
    return SetCollectionApprovalRequestFromJSONTyped(json, false);
}

export function SetCollectionApprovalRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetCollectionApprovalRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'approved': json['approved'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'walletId': !exists(json, 'walletId') ? undefined : json['walletId'],
    };
}

export function SetCollectionApprovalRequestToJSON(value?: SetCollectionApprovalRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'approved': value.approved,
        'address': value.address,
        'walletId': value.walletId,
    };
}

