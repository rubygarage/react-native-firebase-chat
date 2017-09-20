export const getChatItems = data => {
    return data ? Object.keys(data).map(key => data[key]) : []
}
