export const encode = (values: number[]): string => {
    return btoa(values.join(';'));
}

export const decode = (seed: string, requiredAmount?: number): number[] => {
    const result = atob(seed).split(';').map(val => val.includes('.') ? parseFloat(val) : parseInt(val));
    if (requiredAmount !== undefined && requiredAmount != null && result.length != requiredAmount)
        throw new Error(`Decoded array contains an incorrect number of values: ${result.length} instead of required ${requiredAmount}`);
    return result;
}

