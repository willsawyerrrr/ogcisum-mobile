export default function mergeObjects(obj1, obj2) {
    let result = {};

    Object.entries(obj1).forEach(
        ([key, value]) => {
            if (typeof value !== "object") {
                // if the value is not an object, is must be a property
                // properties are never assigned in both obj1 and obj2
                // hence, simply add the property to the result
                result[key] = value;
            } else {
                // if the value is an object, it must be a nested object
                if (Object.hasOwn(obj2, key)) {
                    // if the nested object is present in both obj1 and obj2
                    // merge the nested objects
                    result[key] = mergeObjects(value, obj2[key]);
                } else {
                    // if the nested object is only present in obj1
                    // add the nested object to the result
                    result[key] = value;
                }
            }
        }
    );

    Object.entries(obj2).forEach(
        ([key, value]) => {
            if (typeof value !== "object") {
                // if the value is not an object, is must be a property
                // properties are never assigned in both obj1 and obj2
                // hence, simply add the property to the result
                result[key] = value;
            } else {
                // if the value is an object, it must be a nested object
                // if the nested object is present in both obj1 and obj2
                // it was already handled above; do nothing here
                if (!Object.hasOwn(obj2, key)) {
                    // if the nested object is only present in obj2
                    // add the nested object to the result
                    result[key] = value;
                }
            }
        }
    );

    return result;
}
