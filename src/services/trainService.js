// src/services/trainService.js

import httpClient from "./httpClient";

export const getTrains      = ()           => httpClient.get("/api/trains");
export const getTrainById   = (id)         => httpClient.get(`/api/trains/${id}`);
export const addTrain       = (data)       => httpClient.post("/api/trains", data);
export const updateTrain    = (id, data)   => httpClient.put(`/api/trains/${id}`, data);
export const deleteTrain    = (id)         => httpClient.delete(`/api/trains/${id}`);