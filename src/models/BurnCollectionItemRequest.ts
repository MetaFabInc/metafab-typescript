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
 * @interface BurnCollectionItemRequest
 */
export interface BurnCollectionItemRequest {
    /**
     * The quantity of the collectionItemId to burn.
     * @type {number}
     * @memberof BurnCollectionItemRequest
     */
    quantity: number;
}

/**
 * Check if a given object implements the BurnCollectionItemRequest interface.
 */
export function instanceOfBurnCollectionItemRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "quantity" in value;

    return isInstance;
}

export function BurnCollectionItemRequestFromJSON(json: any): BurnCollectionItemRequest {
    return BurnCollectionItemRequestFromJSONTyped(json, false);
}

export function BurnCollectionItemRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BurnCollectionItemRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'quantity': json['quantity'],
    };
}

export function BurnCollectionItemRequestToJSON(value?: BurnCollectionItemRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'quantity': value.quantity,
    };
}

