import stringifyTime from "../helpers/stringifyTime.js";

/** Base URL for the API */
const apiUrl = "http://wmp.interaction.courses/api/v1/";
/** Personal API key from Blackboard */
const apiKey = "iw1GgfCK";

/** Allowed endpoints for the API read mode. */
const readEndpoints = ["locations", "samples", "samples_to_locations"];
/** Lower bound for the return limit for the API read mode. */
const readLimitLowerBound = 1;
/** Upper bound for the return limit for the API read mode. */
const readLimitUpperBound = 9999;
/** Allowed orders for the API read mode. */
const readOrders = ["asc", "desc"];

/** Allowed sample types for the API create mode. */
const sampleTypes = ["piano", "french_horn", "guitar", "drums"];

/** Allowed endpoints for the API delete mode. */
const deleteEndpoints = ["samples", "samples_to_locations"];


/**
 * Creates a URL used to interact with the API.
 * 
 * @param {object} params URL parameters defining the interaction
 * 
 * @returns {string} URL used to interact with the API
 */
function createUrl(params) {
    let url = `${apiUrl}?apiKey=${apiKey}`;
    for (let param in params) {
        url += `&${param}=${params[param]}`;
    }
    return url;
}


/**
 * Reads items from the API.
 * 
 * @param {string} endpoint endpoint to get from
 * @param {number} [limit = readLimitUpperBound] maximum number of items to return
 * @param {string} [order = "asc"] order in which to return items
 * 
 * @returns {Promise<object>} data returned from the API
 */
async function read(endpoint, limit = readLimitUpperBound, order = "asc") {
    if (!readEndpoints.includes(endpoint)) {
        throw new Error(`Invalid endpoint: ${endpoint}`);
    } else if (limit < readLimitLowerBound || limit > readLimitUpperBound) {
        throw new Error(`Invalid limit: ${limit}`);
    } else if (!readOrders.includes(order)) {
        throw new Error(`Invalid order: ${order}`);
    }

    const url = createUrl(
        {
            mode: "read",
            endpoint: endpoint,
            limit: limit,
            order: order
        }
    );
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


/**
 * Reads locations from the API.
 * 
 * @param {number} [limit = readLimitUpperBound] maximum number of items to return
 * @param {string} [order = "asc"] order in which to return items
 * 
 * @returns {Promise<object[]>} locations returned from the API
 */
export async function readLocations(limit = readLimitUpperBound, order = "asc") {
    if (limit < readLimitLowerBound || limit > readLimitUpperBound) {
        throw new Error(`Invalid limit: ${limit}`);
    } else if (!readOrders.includes(order)) {
        throw new Error(`Invalid order: ${order}`);
    }

    let data = await read("locations", limit, order);
    if ("locations" in data) {
        return data.locations.map(location => {
            const latlong = location.latlong.split(", ");

            return {
                id: location.id,
                name: location.location,
                coordinates: {
                    latitude: parseFloat(latlong[0]),
                    longitude: parseFloat(latlong[1]),
                },
            };
        });
    }

    return [];
}


/**
 * Reads samples from the API.
 * 
 * @param {number} [limit = readLimitUpperBound] maximum number of items to return
 * @param {string} [order = "asc"] order in which to return items
 * 
 * @returns {Promise<object>} samples returned from the API
 */
export async function readSamples(limit = readLimitUpperBound, order = "asc") {
    if (limit < readLimitLowerBound || limit > readLimitUpperBound) {
        throw new Error(`Invalid limit: ${limit}`);
    } else if (!readOrders.includes(order)) {
        throw new Error(`Invalid order: ${order}`);
    }

    let data = await read("samples", limit, order);
    if ("samples" in data) {
        return data.samples.map(sample => {
            let { time, date } = stringifyTime(sample.datetime);
            return {
                id: sample.id,
                name: sample.name,
                type: sample.type,
                data: JSON.parse(sample.recording_data),
                time: time,
                date: date,
                previewing: false
            };
        });
    }
    return [];
}


/**
 * Reads samples to locations from the API.
 * 
 * @param {number} [limit = readLimitUpperBound] maximum number of items to return
 * @param {string} [order = "asc"] order in which to return items
 * 
 * @returns {Promise<object>} data returned from the API
 */
export async function readSamplesToLocations(limit = readLimitUpperBound, order = "asc") {
    if (limit < readLimitLowerBound || limit > readLimitUpperBound) {
        throw new Error(`Invalid limit: ${limit}`);
    } else if (!readOrders.includes(order)) {
        throw new Error(`Invalid order: ${order}`);
    }

    let data = await read("samples_to_locations", limit, order);
    if ("samples_to_locations" in data) {
        return data.samples_to_locations.map(sampleToLocation => {
            return {
                id: sampleToLocation.id,
                location: sampleToLocation.locations_id,
                sample: sampleToLocation.samples_id
            };
        });
    }
    return [];
}
