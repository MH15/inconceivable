
/**
 * Async helper to get JSON from server.
 * @param path URL to a JSON file.
 */
export async function getJSON(path: string) {
    // Default options are marked with *
    const response = await fetch(path, {
        mode: 'cors', // no-cors, *cors, same-origin
    })
    return await response.json() // parses JSON response into native JavaScript objects
}
