
// Placeholder for API service
export const api = {
    get: async (url: string) => {
        console.log(`GET ${url}`)
        // TODO: Implement actual fetch
        return Promise.resolve({})
    },
    post: async (url: string, data: any) => {
        console.log(`POST ${url}`, data)
        // TODO: Implement actual fetch
        return Promise.resolve({})
    }
}
