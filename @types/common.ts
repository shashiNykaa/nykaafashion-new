declare type ApiCall = (method: string, endpoint: string, body?: any) => Promise<any>;

export type {ApiCall};