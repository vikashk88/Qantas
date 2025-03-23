import { APIRequestContext } from "@playwright/test";


export class API {
    request: APIRequestContext;
    baseURL: string;
    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async get(path: string): Promise<any> {

        try {
            return await this.request.get(path);
        }
        catch (error: any) {
            throw new Error(error.stack + "Error while running API GET request." + error.message)
        }
    }
}