function compactObject(obj) {
    if (Array.isArray(obj)) {
        return obj.reduce((result, value) => {
            const compactedValue = compactObject(value);
            if (Boolean(compactedValue)) result.push(compactedValue);
            return result;
        }, []);
    } else if (typeof obj === 'object' && obj !== null) {
        return Object.entries(obj).reduce((result, [key, value]) => {
            const compactedValue = compactObject(value);
            if (Boolean(compactedValue)) result[key] = compactedValue;
            return result;
        }, {});
    }
    return obj;
}