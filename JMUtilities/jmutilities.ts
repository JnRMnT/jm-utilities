export namespace JM {
    export function isDefined(obj: unknown): boolean {
        return (obj != null && obj != undefined);
    };
    export function isEmpty(obj: unknown): boolean {
        if (JM.isDefined(obj)) {
            if (typeof obj === "string") {
                const objString = <string>obj;
                return objString.length == 0;
            }
            else if (Array.isArray(obj)) {
                return (<Array<unknown>>obj).length == 0;
            } else {
                //check only desired empty checks, else return false
                return false;
            }
        }
        else {
            return true;
        }
    };

    export function waitFor(conditionFunction: Function, maxRetryCount?: number | undefined, tryInterval?: number | undefined): Promise<void> {
        const waitPromise = new Promise<void>((resolve, reject) => {
            if (!JM.isDefined(maxRetryCount)) {
                maxRetryCount = 5;
            }
            if (!JM.isDefined(tryInterval)) {
                tryInterval = 200;
            }
            var retryCount = 0;
            var retry = function () {
                if (conditionFunction()) {
                    resolve();
                } else {
                    retryCount++;
                    if (retryCount < (maxRetryCount as number)) {
                        setTimeout(function () {
                            retry();
                        }, tryInterval);
                    } else {
                        reject();
                    }
                }
            };

            retry();
        });
        return waitPromise;
    };
};