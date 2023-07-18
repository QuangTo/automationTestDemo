const waitFor = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function reTryOperation(
    operation,
    delay = 1000,
    maxAttemps = 3,
) {
    try {
        return operation;
    } catch (error) {
        if (maxAttemps <= 0) {
            return Promise.reject("Retried fail");
        }
        console.log(`Start retry: `, maxAttemps);
        await waitFor(delay);
        return reTryOperation(operation, delay + 1000, maxAttemps - 1);
    }
}

// sample for api 

export function getAPI(url, jwt, getData) {
    return reTryOperation(async => {
        // function await get.method
    }, 1000, 5)
}

// sample for finding selector 

export function findSelector(selector) {
    return reTryOperation(async => {
        // selector
    }, 1000, 3)
}