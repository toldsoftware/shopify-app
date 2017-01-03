import * as T from '@told/azure-functions-server/lib/src';

export interface ExampleFunctionRequest extends T.Request<{ setup?: boolean }, {}> {
}

export interface ExampleFunctionResponseData {
    text: string;
}

export interface ExampleFunctionResponseBody extends T.ResponseBody<ExampleFunctionResponseData> { }
