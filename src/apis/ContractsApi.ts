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


import * as runtime from '../runtime';
import type {
  ContractModel,
  CreateContractRequest,
  TransactionModel,
  WriteContractRequest,
} from '../models';
import {
    ContractModelFromJSON,
    ContractModelToJSON,
    CreateContractRequestFromJSON,
    CreateContractRequestToJSON,
    TransactionModelFromJSON,
    TransactionModelToJSON,
    WriteContractRequestFromJSON,
    WriteContractRequestToJSON,
} from '../models';

export interface CreateContractOperationRequest {
    xAuthorization: string;
    createContractRequest: CreateContractRequest;
}

export interface GetContractsRequest {
    xGameKey: string;
}

export interface ReadContractRequest {
    contractId: string;
    func: string;
    args?: string;
}

export interface WriteContractOperationRequest {
    contractId: string;
    xAuthorization: string;
    xPassword: string;
    writeContractRequest: WriteContractRequest;
}

/**
 * 
 */
export class ContractsApi extends runtime.BaseAPI {

    /**
     * Create a MetaFab custom contract entry from an existing contract address and contract abi. This allows the game and players belonging to the authenticated game to interact with the contract\'s read and write functions through MetaFab\'s read and write contract endpoints.
     * Create custom contract
     */
    async createContractRaw(requestParameters: CreateContractOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ContractModel>> {
        if (requestParameters.xAuthorization === null || requestParameters.xAuthorization === undefined) {
            throw new runtime.RequiredError('xAuthorization','Required parameter requestParameters.xAuthorization was null or undefined when calling createContract.');
        }

        if (requestParameters.createContractRequest === null || requestParameters.createContractRequest === undefined) {
            throw new runtime.RequiredError('createContractRequest','Required parameter requestParameters.createContractRequest was null or undefined when calling createContract.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xAuthorization !== undefined && requestParameters.xAuthorization !== null) {
            headerParameters['X-Authorization'] = String(requestParameters.xAuthorization);
        }

        const response = await this.request({
            path: `/v1/contracts`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateContractRequestToJSON(requestParameters.createContractRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ContractModelFromJSON(jsonValue));
    }

    /**
     * Create a MetaFab custom contract entry from an existing contract address and contract abi. This allows the game and players belonging to the authenticated game to interact with the contract\'s read and write functions through MetaFab\'s read and write contract endpoints.
     * Create custom contract
     */
    async createContract(requestParameters: CreateContractOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ContractModel> {
        const response = await this.createContractRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns an array of active contracts deployed by the game associated with the provided `X-Game-Key`.
     * Get contracts
     */
    async getContractsRaw(requestParameters: GetContractsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ContractModel>>> {
        if (requestParameters.xGameKey === null || requestParameters.xGameKey === undefined) {
            throw new runtime.RequiredError('xGameKey','Required parameter requestParameters.xGameKey was null or undefined when calling getContracts.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xGameKey !== undefined && requestParameters.xGameKey !== null) {
            headerParameters['X-Game-Key'] = String(requestParameters.xGameKey);
        }

        const response = await this.request({
            path: `/v1/contracts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ContractModelFromJSON));
    }

    /**
     * Returns an array of active contracts deployed by the game associated with the provided `X-Game-Key`.
     * Get contracts
     */
    async getContracts(requestParameters: GetContractsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ContractModel>> {
        const response = await this.getContractsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Oftentimes you\'ll want to query and retrieve some data from a contract. This is incredibly easy to do for any contract deployed through MetaFab.  Using this endpoint, you can get the data returned by any readable function listed in a contracts ABI. This could be things like querying the totalSupply of a currency contract, the number of owners of an items contract, and more.
     * Read contract data
     */
    async readContractRaw(requestParameters: ReadContractRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.contractId === null || requestParameters.contractId === undefined) {
            throw new runtime.RequiredError('contractId','Required parameter requestParameters.contractId was null or undefined when calling readContract.');
        }

        if (requestParameters.func === null || requestParameters.func === undefined) {
            throw new runtime.RequiredError('func','Required parameter requestParameters.func was null or undefined when calling readContract.');
        }

        const queryParameters: any = {};

        if (requestParameters.func !== undefined) {
            queryParameters['func'] = requestParameters.func;
        }

        if (requestParameters.args !== undefined) {
            queryParameters['args'] = requestParameters.args;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/contracts/{contractId}/reads`.replace(`{${"contractId"}}`, encodeURIComponent(String(requestParameters.contractId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Oftentimes you\'ll want to query and retrieve some data from a contract. This is incredibly easy to do for any contract deployed through MetaFab.  Using this endpoint, you can get the data returned by any readable function listed in a contracts ABI. This could be things like querying the totalSupply of a currency contract, the number of owners of an items contract, and more.
     * Read contract data
     */
    async readContract(requestParameters: ReadContractRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.readContractRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * MetaFab\'s convenience endpoints for contract interactions may not be flexible enough depending on your use case. For these situations, you can interact with contracts and create transactions directly.  Using this endpoint, you can execute a transaction for any writeable contract method as defined in the contract\'s ABI for the MetaFab contractId provided. Both Games and Player resources have authority to use this endpoint to execute transactions against any valid MetaFab contractId.  Additionally, MetaFab will automatically attempt to perform a gasless transaction for players interacting with a contract through this endpoint. Gasless transactions by players through this endpoint will only work if the target contract was deployed through MetaFab or supports MetaFab\'s ERC2771 trusted forwarder contract.
     * Write contract data
     */
    async writeContractRaw(requestParameters: WriteContractOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionModel>> {
        if (requestParameters.contractId === null || requestParameters.contractId === undefined) {
            throw new runtime.RequiredError('contractId','Required parameter requestParameters.contractId was null or undefined when calling writeContract.');
        }

        if (requestParameters.xAuthorization === null || requestParameters.xAuthorization === undefined) {
            throw new runtime.RequiredError('xAuthorization','Required parameter requestParameters.xAuthorization was null or undefined when calling writeContract.');
        }

        if (requestParameters.xPassword === null || requestParameters.xPassword === undefined) {
            throw new runtime.RequiredError('xPassword','Required parameter requestParameters.xPassword was null or undefined when calling writeContract.');
        }

        if (requestParameters.writeContractRequest === null || requestParameters.writeContractRequest === undefined) {
            throw new runtime.RequiredError('writeContractRequest','Required parameter requestParameters.writeContractRequest was null or undefined when calling writeContract.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xAuthorization !== undefined && requestParameters.xAuthorization !== null) {
            headerParameters['X-Authorization'] = String(requestParameters.xAuthorization);
        }

        if (requestParameters.xPassword !== undefined && requestParameters.xPassword !== null) {
            headerParameters['X-Password'] = String(requestParameters.xPassword);
        }

        const response = await this.request({
            path: `/v1/contracts/{contractId}/writes`.replace(`{${"contractId"}}`, encodeURIComponent(String(requestParameters.contractId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WriteContractRequestToJSON(requestParameters.writeContractRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionModelFromJSON(jsonValue));
    }

    /**
     * MetaFab\'s convenience endpoints for contract interactions may not be flexible enough depending on your use case. For these situations, you can interact with contracts and create transactions directly.  Using this endpoint, you can execute a transaction for any writeable contract method as defined in the contract\'s ABI for the MetaFab contractId provided. Both Games and Player resources have authority to use this endpoint to execute transactions against any valid MetaFab contractId.  Additionally, MetaFab will automatically attempt to perform a gasless transaction for players interacting with a contract through this endpoint. Gasless transactions by players through this endpoint will only work if the target contract was deployed through MetaFab or supports MetaFab\'s ERC2771 trusted forwarder contract.
     * Write contract data
     */
    async writeContract(requestParameters: WriteContractOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionModel> {
        const response = await this.writeContractRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
