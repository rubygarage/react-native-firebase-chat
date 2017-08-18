'use strict';

export function getChatItems(data) {
    return data ? Object.keys(data).map(key => data[key]) : [];
}