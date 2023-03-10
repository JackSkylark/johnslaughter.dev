export enum CompareResult {
    equal = 0,
    greaterThan = 1,
    lessThan = -1
};

export type SortInfo<T> = {
    selector: (x: T) => any;
    isDescending: boolean;
}

export function compare<T>(a: T, b: T): CompareResult {
    if (a == b) return 0;
    if (a == null) return -1;
    if (b == null) return 1;

    if (typeof a === 'string' && typeof b === 'string') {
        return a.localeCompare(b, 'standard', { sensitivity: 'case'});
    }

    return b > a ? -1 : 1;
}

export const getSortCompareFn = <T>(...sortInfos: SortInfo<T>[]) => (a: T, b: T) => {
    for (let i = 0; i <= sortInfos.length; i++) {
        const sortInfo = sortInfos[i];
        if (!sortInfo) continue;

        const { selector, isDescending } = sortInfo;
        
        const cmp = compare(selector(a), selector(b));
        if (cmp) {
            return isDescending
                ? -cmp
                : cmp;
        }
    }

    return 0;
}

export const sort = <T>(arr: T[], ...sortInfos: SortInfo<T>[]): T[] => {
    const compareFn = getSortCompareFn(...sortInfos);
    arr.sort(compareFn);

    return arr;
}
