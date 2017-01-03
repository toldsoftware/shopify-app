import * as T from '@told/azure-functions-server/lib/src';
import { ExampleFunctionRequest, ExampleFunctionResponseData } from '../src/example-function-model';
export declare function main(context: T.Context<ExampleFunctionResponseData>, request: ExampleFunctionRequest): void;
