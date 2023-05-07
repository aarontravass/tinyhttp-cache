import { caching } from 'cache-manager';

const cacheClient = await caching('memory', {
    max: 100,
    ttl: 10 * 1000 /*milliseconds*/,
});


export async function get(key) {
    const value = await cacheClient.get(key);
    if (typeof value == undefined) return null;
    return value;
}

export async function set(key, value, ttl = 100) {
    await cacheClient.set(key, value, ttl);
}