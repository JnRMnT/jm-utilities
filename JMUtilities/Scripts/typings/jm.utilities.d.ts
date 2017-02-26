declare module JM {
    export function isDefined(obj: any): boolean;
    export function isEmpty(obj: any): boolean;
    export function waitFor(conditionFunction: Function, maxRetryCount?: number, tryInterval?: number): Q.IPromise<any>;
}