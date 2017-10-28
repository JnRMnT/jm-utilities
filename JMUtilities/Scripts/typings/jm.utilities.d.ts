﻿declare class JMUtilities {
    public isDefined(obj: any): boolean;
    public isEmpty(obj: any): boolean;
    public waitFor(conditionFunction: Function, maxRetryCount?: number, tryInterval?: number): Q.IPromise<any>;
    public resolveModule(moduleName: string, windowName?: string): any;
    public isNode(): boolean;
}