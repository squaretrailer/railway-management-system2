// src/services/userService.js

import httpClient from "./httpClient";

export const getUsers      = ()           => httpClient.get("/api/users");
export const getUserById   = (id)         => httpClient.get(`/api/users/${id}`);
export const createUser    = (data)       => httpClient.post("/api/users", data);
export const updateUser    = (id, data)   => httpClient.put(`/api/users/${id}`, data);
export const deleteUser    = (id)         => httpClient.delete(`/api/users/${id}`);