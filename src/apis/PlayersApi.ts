/* tslint:disable */
/* eslint-disable */
/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.1.43
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AuthPlayer200Response,
  CreatePlayerRequest,
  PlayerModel,
  UpdatePlayerRequest,
} from '../models';
import {
    AuthPlayer200ResponseFromJSON,
    AuthPlayer200ResponseToJSON,
    CreatePlayerRequestFromJSON,
    CreatePlayerRequestToJSON,
    PlayerModelFromJSON,
    PlayerModelToJSON,
    UpdatePlayerRequestFromJSON,
    UpdatePlayerRequestToJSON,
} from '../models';

export interface AuthPlayerRequest {
    xGameKey: string;
}

export interface CreatePlayerOperationRequest {
    xGameKey: string;
    createPlayerRequest: CreatePlayerRequest;
}

export interface UpdatePlayerOperationRequest {
    playerId: string;
    xAuthorization: string;
    updatePlayerRequest: UpdatePlayerRequest;
}

/**
 * 
 */
export class PlayersApi extends runtime.BaseAPI {

    /**
     * Returns an existing player object containing access token, wallet, and other details for a game when provided a valid username and password login using Basic Auth.
     * Authenticate player
     */
    async authPlayerRaw(requestParameters: AuthPlayerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AuthPlayer200Response>> {
        if (requestParameters.xGameKey === null || requestParameters.xGameKey === undefined) {
            throw new runtime.RequiredError('xGameKey','Required parameter requestParameters.xGameKey was null or undefined when calling authPlayer.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xGameKey !== undefined && requestParameters.xGameKey !== null) {
            headerParameters['X-Game-Key'] = String(requestParameters.xGameKey);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/v1/players`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthPlayer200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns an existing player object containing access token, wallet, and other details for a game when provided a valid username and password login using Basic Auth.
     * Authenticate player
     */
    async authPlayer(requestParameters: AuthPlayerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AuthPlayer200Response> {
        const response = await this.authPlayerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a new player for a game. Players are automatically associated with an internally managed wallet.  Player access tokens can be used to directly interact with any MetaFab managed contracts, currencies, items collections, marketplaces and more. Player interactions are also gasless by default, completely removing all crypto friction for players to engage with your MetaFab supported games.
     * Create player
     */
    async createPlayerRaw(requestParameters: CreatePlayerOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AuthPlayer200Response>> {
        if (requestParameters.xGameKey === null || requestParameters.xGameKey === undefined) {
            throw new runtime.RequiredError('xGameKey','Required parameter requestParameters.xGameKey was null or undefined when calling createPlayer.');
        }

        if (requestParameters.createPlayerRequest === null || requestParameters.createPlayerRequest === undefined) {
            throw new runtime.RequiredError('createPlayerRequest','Required parameter requestParameters.createPlayerRequest was null or undefined when calling createPlayer.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xGameKey !== undefined && requestParameters.xGameKey !== null) {
            headerParameters['X-Game-Key'] = String(requestParameters.xGameKey);
        }

        const response = await this.request({
            path: `/v1/players`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreatePlayerRequestToJSON(requestParameters.createPlayerRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthPlayer200ResponseFromJSON(jsonValue));
    }

    /**
     * Create a new player for a game. Players are automatically associated with an internally managed wallet.  Player access tokens can be used to directly interact with any MetaFab managed contracts, currencies, items collections, marketplaces and more. Player interactions are also gasless by default, completely removing all crypto friction for players to engage with your MetaFab supported games.
     * Create player
     */
    async createPlayer(requestParameters: CreatePlayerOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AuthPlayer200Response> {
        const response = await this.createPlayerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update various fields specific to a player. Such as changing its password and resetting its access token.
     * Update player
     */
    async updatePlayerRaw(requestParameters: UpdatePlayerOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PlayerModel>> {
        if (requestParameters.playerId === null || requestParameters.playerId === undefined) {
            throw new runtime.RequiredError('playerId','Required parameter requestParameters.playerId was null or undefined when calling updatePlayer.');
        }

        if (requestParameters.xAuthorization === null || requestParameters.xAuthorization === undefined) {
            throw new runtime.RequiredError('xAuthorization','Required parameter requestParameters.xAuthorization was null or undefined when calling updatePlayer.');
        }

        if (requestParameters.updatePlayerRequest === null || requestParameters.updatePlayerRequest === undefined) {
            throw new runtime.RequiredError('updatePlayerRequest','Required parameter requestParameters.updatePlayerRequest was null or undefined when calling updatePlayer.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xAuthorization !== undefined && requestParameters.xAuthorization !== null) {
            headerParameters['X-Authorization'] = String(requestParameters.xAuthorization);
        }

        const response = await this.request({
            path: `/v1/players/{playerId}`.replace(`{${"playerId"}}`, encodeURIComponent(String(requestParameters.playerId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdatePlayerRequestToJSON(requestParameters.updatePlayerRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PlayerModelFromJSON(jsonValue));
    }

    /**
     * Update various fields specific to a player. Such as changing its password and resetting its access token.
     * Update player
     */
    async updatePlayer(requestParameters: UpdatePlayerOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PlayerModel> {
        const response = await this.updatePlayerRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
