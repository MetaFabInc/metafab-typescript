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


import * as runtime from '../runtime';
import type {
  AuthPlayer200Response,
  CreatePlayerRequest,
  GetPlayerData200Response,
  PublicPlayer,
  RemovePlayerConnectedWalletRequest,
  SetPlayerConnectedWallet200Response,
  SetPlayerConnectedWalletRequest,
  SetPlayerDataRequest,
  UpdatePlayer200Response,
  UpdatePlayerRequest,
} from '../models';
import {
    AuthPlayer200ResponseFromJSON,
    AuthPlayer200ResponseToJSON,
    CreatePlayerRequestFromJSON,
    CreatePlayerRequestToJSON,
    GetPlayerData200ResponseFromJSON,
    GetPlayerData200ResponseToJSON,
    PublicPlayerFromJSON,
    PublicPlayerToJSON,
    RemovePlayerConnectedWalletRequestFromJSON,
    RemovePlayerConnectedWalletRequestToJSON,
    SetPlayerConnectedWallet200ResponseFromJSON,
    SetPlayerConnectedWallet200ResponseToJSON,
    SetPlayerConnectedWalletRequestFromJSON,
    SetPlayerConnectedWalletRequestToJSON,
    SetPlayerDataRequestFromJSON,
    SetPlayerDataRequestToJSON,
    UpdatePlayer200ResponseFromJSON,
    UpdatePlayer200ResponseToJSON,
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

export interface GetPlayerRequest {
    playerId: string;
}

export interface GetPlayerDataRequest {
    playerId: string;
}

export interface GetPlayersRequest {
    xAuthorization: string;
}

export interface RemovePlayerConnectedWalletOperationRequest {
    playerId: string;
    playerWalletId: string;
    removePlayerConnectedWalletRequest: RemovePlayerConnectedWalletRequest;
}

export interface SetPlayerConnectedWalletOperationRequest {
    playerId: string;
    xAuthorization: string;
    setPlayerConnectedWalletRequest: SetPlayerConnectedWalletRequest;
}

export interface SetPlayerDataOperationRequest {
    playerId: string;
    xAuthorization: string;
    setPlayerDataRequest: SetPlayerDataRequest;
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
            path: `/v1/players/auth`,
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
     * Returns a player object for the provided player id.
     * Get player
     */
    async getPlayerRaw(requestParameters: GetPlayerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublicPlayer>> {
        if (requestParameters.playerId === null || requestParameters.playerId === undefined) {
            throw new runtime.RequiredError('playerId','Required parameter requestParameters.playerId was null or undefined when calling getPlayer.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/players/{playerId}`.replace(`{${"playerId"}}`, encodeURIComponent(String(requestParameters.playerId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PublicPlayerFromJSON(jsonValue));
    }

    /**
     * Returns a player object for the provided player id.
     * Get player
     */
    async getPlayer(requestParameters: GetPlayerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublicPlayer> {
        const response = await this.getPlayerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the latest public and protected data as an object for the provided playerId.
     * Get player data
     */
    async getPlayerDataRaw(requestParameters: GetPlayerDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetPlayerData200Response>> {
        if (requestParameters.playerId === null || requestParameters.playerId === undefined) {
            throw new runtime.RequiredError('playerId','Required parameter requestParameters.playerId was null or undefined when calling getPlayerData.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/players/{playerId}/data`.replace(`{${"playerId"}}`, encodeURIComponent(String(requestParameters.playerId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetPlayerData200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns the latest public and protected data as an object for the provided playerId.
     * Get player data
     */
    async getPlayerData(requestParameters: GetPlayerDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetPlayerData200Response> {
        const response = await this.getPlayerDataRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all players for the authenticated game as an array of player objects.
     * Get players
     */
    async getPlayersRaw(requestParameters: GetPlayersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<PublicPlayer>>> {
        if (requestParameters.xAuthorization === null || requestParameters.xAuthorization === undefined) {
            throw new runtime.RequiredError('xAuthorization','Required parameter requestParameters.xAuthorization was null or undefined when calling getPlayers.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAuthorization !== undefined && requestParameters.xAuthorization !== null) {
            headerParameters['X-Authorization'] = String(requestParameters.xAuthorization);
        }

        const response = await this.request({
            path: `/v1/players`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PublicPlayerFromJSON));
    }

    /**
     * Returns all players for the authenticated game as an array of player objects.
     * Get players
     */
    async getPlayers(requestParameters: GetPlayersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<PublicPlayer>> {
        const response = await this.getPlayersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Removes an external wallet from a player account. The player\'s wallet is reverted to their custodial wallet.
     * Remove player connected wallet
     */
    async removePlayerConnectedWalletRaw(requestParameters: RemovePlayerConnectedWalletOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.playerId === null || requestParameters.playerId === undefined) {
            throw new runtime.RequiredError('playerId','Required parameter requestParameters.playerId was null or undefined when calling removePlayerConnectedWallet.');
        }

        if (requestParameters.playerWalletId === null || requestParameters.playerWalletId === undefined) {
            throw new runtime.RequiredError('playerWalletId','Required parameter requestParameters.playerWalletId was null or undefined when calling removePlayerConnectedWallet.');
        }

        if (requestParameters.removePlayerConnectedWalletRequest === null || requestParameters.removePlayerConnectedWalletRequest === undefined) {
            throw new runtime.RequiredError('removePlayerConnectedWalletRequest','Required parameter requestParameters.removePlayerConnectedWalletRequest was null or undefined when calling removePlayerConnectedWallet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/players/{playerId}/wallets/{playerWalletId}`.replace(`{${"playerId"}}`, encodeURIComponent(String(requestParameters.playerId))).replace(`{${"playerWalletId"}}`, encodeURIComponent(String(requestParameters.playerWalletId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: RemovePlayerConnectedWalletRequestToJSON(requestParameters.removePlayerConnectedWalletRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Removes an external wallet from a player account. The player\'s wallet is reverted to their custodial wallet.
     * Remove player connected wallet
     */
    async removePlayerConnectedWallet(requestParameters: RemovePlayerConnectedWalletOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.removePlayerConnectedWalletRaw(requestParameters, initOverrides);
    }

    /**
     * Sets an external wallet as the wallet for a player account. The set wallet can transact gaslessly with all MetaFab related systems through the same MetaFab API calls as custodial wallets without requiring transaction signing or private keys.  This is done through an internal system MetaFab has created that allows an external connected wallet to delegate transaction signing for a specific game\'s set of contracts to a player\'s password protected custodial wallet. This allow the custodial wallet to sign and submit transactions to a specific game\'s related contracts as if they were signed and submitted by the connected external wallet. This also means that all earned tokens, purchased items and any interactions happen and are recorded on chain as the external connected wallet. No additional logic needs to be writted by developers to support both custodial and external wallets, everything just works.  Finally, this endpoint is meant for advanced users. The majority of developers who want to implement external wallet support for their game can do so without any extra work through our whitelabeled wallet connection feature that implements this endpoint underneath the hood without any required work.
     * Set player connected wallet
     */
    async setPlayerConnectedWalletRaw(requestParameters: SetPlayerConnectedWalletOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SetPlayerConnectedWallet200Response>> {
        if (requestParameters.playerId === null || requestParameters.playerId === undefined) {
            throw new runtime.RequiredError('playerId','Required parameter requestParameters.playerId was null or undefined when calling setPlayerConnectedWallet.');
        }

        if (requestParameters.xAuthorization === null || requestParameters.xAuthorization === undefined) {
            throw new runtime.RequiredError('xAuthorization','Required parameter requestParameters.xAuthorization was null or undefined when calling setPlayerConnectedWallet.');
        }

        if (requestParameters.setPlayerConnectedWalletRequest === null || requestParameters.setPlayerConnectedWalletRequest === undefined) {
            throw new runtime.RequiredError('setPlayerConnectedWalletRequest','Required parameter requestParameters.setPlayerConnectedWalletRequest was null or undefined when calling setPlayerConnectedWallet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xAuthorization !== undefined && requestParameters.xAuthorization !== null) {
            headerParameters['X-Authorization'] = String(requestParameters.xAuthorization);
        }

        const response = await this.request({
            path: `/v1/players/{playerId}/wallets`.replace(`{${"playerId"}}`, encodeURIComponent(String(requestParameters.playerId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SetPlayerConnectedWalletRequestToJSON(requestParameters.setPlayerConnectedWalletRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SetPlayerConnectedWallet200ResponseFromJSON(jsonValue));
    }

    /**
     * Sets an external wallet as the wallet for a player account. The set wallet can transact gaslessly with all MetaFab related systems through the same MetaFab API calls as custodial wallets without requiring transaction signing or private keys.  This is done through an internal system MetaFab has created that allows an external connected wallet to delegate transaction signing for a specific game\'s set of contracts to a player\'s password protected custodial wallet. This allow the custodial wallet to sign and submit transactions to a specific game\'s related contracts as if they were signed and submitted by the connected external wallet. This also means that all earned tokens, purchased items and any interactions happen and are recorded on chain as the external connected wallet. No additional logic needs to be writted by developers to support both custodial and external wallets, everything just works.  Finally, this endpoint is meant for advanced users. The majority of developers who want to implement external wallet support for their game can do so without any extra work through our whitelabeled wallet connection feature that implements this endpoint underneath the hood without any required work.
     * Set player connected wallet
     */
    async setPlayerConnectedWallet(requestParameters: SetPlayerConnectedWalletOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SetPlayerConnectedWallet200Response> {
        const response = await this.setPlayerConnectedWalletRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates or updates public and/or protected data for the provided playerId. Data updates are performed using deep merging. This means that when you update any top level or nested properties specific to player public or protected data, you only need to include the properties you are making changes to. Any existing properties not included in request body arguments will be retained on the player data object.  Please note, When writing an array type for a player, arrays do not follow the deep merge approach. If you add or remove an item from an array, the entire array must be passed as an argument when updating the related property for player public or protected data.
     * Set player data
     */
    async setPlayerDataRaw(requestParameters: SetPlayerDataOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetPlayerData200Response>> {
        if (requestParameters.playerId === null || requestParameters.playerId === undefined) {
            throw new runtime.RequiredError('playerId','Required parameter requestParameters.playerId was null or undefined when calling setPlayerData.');
        }

        if (requestParameters.xAuthorization === null || requestParameters.xAuthorization === undefined) {
            throw new runtime.RequiredError('xAuthorization','Required parameter requestParameters.xAuthorization was null or undefined when calling setPlayerData.');
        }

        if (requestParameters.setPlayerDataRequest === null || requestParameters.setPlayerDataRequest === undefined) {
            throw new runtime.RequiredError('setPlayerDataRequest','Required parameter requestParameters.setPlayerDataRequest was null or undefined when calling setPlayerData.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xAuthorization !== undefined && requestParameters.xAuthorization !== null) {
            headerParameters['X-Authorization'] = String(requestParameters.xAuthorization);
        }

        const response = await this.request({
            path: `/v1/players/{playerId}/data`.replace(`{${"playerId"}}`, encodeURIComponent(String(requestParameters.playerId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SetPlayerDataRequestToJSON(requestParameters.setPlayerDataRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetPlayerData200ResponseFromJSON(jsonValue));
    }

    /**
     * Creates or updates public and/or protected data for the provided playerId. Data updates are performed using deep merging. This means that when you update any top level or nested properties specific to player public or protected data, you only need to include the properties you are making changes to. Any existing properties not included in request body arguments will be retained on the player data object.  Please note, When writing an array type for a player, arrays do not follow the deep merge approach. If you add or remove an item from an array, the entire array must be passed as an argument when updating the related property for player public or protected data.
     * Set player data
     */
    async setPlayerData(requestParameters: SetPlayerDataOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetPlayerData200Response> {
        const response = await this.setPlayerDataRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update various fields specific to a player. Such as changing its password and resetting its access token.
     * Update player
     */
    async updatePlayerRaw(requestParameters: UpdatePlayerOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdatePlayer200Response>> {
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

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdatePlayer200ResponseFromJSON(jsonValue));
    }

    /**
     * Update various fields specific to a player. Such as changing its password and resetting its access token.
     * Update player
     */
    async updatePlayer(requestParameters: UpdatePlayerOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdatePlayer200Response> {
        const response = await this.updatePlayerRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
