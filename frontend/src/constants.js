import React from "react";

export const USER_AUTHORIZED = React.createContext({
    authorized: false,
    user: {},
    changeState: () => {}
})

export const API_BASE_URL = 'http://localhost:1010';
export const ACCESS_TOKEN = 'accessToken';