export const encode = (values: number[]): string => {
    return btoa(JSON.stringify(values));
}

export const decode = (seed: string, requiredAmount?: number): number[] => {
    const result = JSON.parse(atob(seed));
    if (requiredAmount !== undefined && requiredAmount !== null && result.length !== requiredAmount)
        throw new Error(`Decoded array contains an incorrect number of values: ${result.length} instead of required ${requiredAmount}`);
    return result;
}

