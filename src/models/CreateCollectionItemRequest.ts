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
import type { CreateCollectionItemRequestAttributesInner } from './CreateCollectionItemRequestAttributesInner';
import {
    CreateCollectionItemRequestAttributesInnerFromJSON,
    CreateCollectionItemRequestAttributesInnerFromJSONTyped,
    CreateCollectionItemRequestAttributesInnerToJSON,
} from './CreateCollectionItemRequestAttributesInner';

/**
 * 
 * @export
 * @interface CreateCollectionItemRequest
 */
export interface CreateCollectionItemRequest {
    /**
     * A unique itemId to use for this item within the collection. If an existing itemId is used, the current metadata will be overriden. Any number may be used.
     * 
     * The terms `itemId` and `collectionItemId` are used interchangeably and equivalent to one another throughout MetaFab documentation.
     * @type {number}
     * @memberof CreateCollectionItemRequest
     */
    id: number;
    /**
     * The name of this item.
     * @type {string}
     * @memberof CreateCollectionItemRequest
     */
    name: string;
    /**
     * A text description of this item. This is a great spot to include lore, game mechanics and more related to this item.
     * @type {string}
     * @memberof CreateCollectionItemRequest
     */
    description: string;
    /**
     * A base64 string of the image for this item. Either `imageBase64` or `imageUrl` must be provided. Supported image formats are `jpg`, `jpeg`, `png`, `gif`. Recommended size of 1:1 aspect ratio and no more than 1500x1500 pixels.
     * @type {string}
     * @memberof CreateCollectionItemRequest
     */
    imageBase64?: string;
    /**
     * An external url that resolves to an image to use for this item. This can also be set to an ipfs:// uri. Recommended size of 1:1 aspect ratio and no more than 1500x1500 pixels.
     * @type {string}
     * @memberof CreateCollectionItemRequest
     */
    imageUrl?: string;
    /**
     * An optional URL where players can go to learn more about this item specifically, or your game, or any other link.
     * @type {string}
     * @memberof CreateCollectionItemRequest
     */
    externalUrl?: string;
    /**
     * An array of objects that conform with the [metadata attributes standard that can be found here](https://docs.opensea.io/docs/metadata-standards#attributes)
     * @type {Array<CreateCollectionItemRequestAttributesInner>}
     * @memberof CreateCollectionItemRequest
     */
    attributes?: Array<CreateCollectionItemRequestAttributesInner>;
    /**
     * An arbitrary object of data attached to the top level metadata object. This is useful for including data or resource URLs specific to your game. Such as URLs that point to 3D models, music files, bitmaps, or anything else you need to reference.
     * @type {object}
     * @memberof CreateCollectionItemRequest
     */
    data?: object;
}

/**
 * Check if a given object implements the CreateCollectionItemRequest interface.
 */
export function instanceOfCreateCollectionItemRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;

    return isInstance;
}

export function CreateCollectionItemRequestFromJSON(json: any): CreateCollectionItemRequest {
    return CreateCollectionItemRequestFromJSONTyped(json, false);
}

export function CreateCollectionItemRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCollectionItemRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'],
        'imageBase64': !exists(json, 'imageBase64') ? undefined : json['imageBase64'],
        'imageUrl': !exists(json, 'imageUrl') ? undefined : json['imageUrl'],
        'externalUrl': !exists(json, 'externalUrl') ? undefined : json['externalUrl'],
        'attributes': !exists(json, 'attributes') ? undefined : ((json['attributes'] as Array<any>).map(CreateCollectionItemRequestAttributesInnerFromJSON)),
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function CreateCollectionItemRequestToJSON(value?: CreateCollectionItemRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'description': value.description,
        'imageBase64': value.imageBase64,
        'imageUrl': value.imageUrl,
        'externalUrl': value.externalUrl,
        'attributes': value.attributes === undefined ? undefined : ((value.attributes as Array<any>).map(CreateCollectionItemRequestAttributesInnerToJSON)),
        'data': value.data,
    };
}

