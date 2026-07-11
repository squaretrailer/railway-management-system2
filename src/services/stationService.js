// src/services/stationService.js

import httpClient from "./httpClient";

export const getStations    = ()           => httpClient.get("/api/stations");
export const getStationById = (id)         => httpClient.get(`/api/stations/${id}`);
export const addStation     = (data)       => httpClient.post("/api/stations", data);
export const updateStation  = (id, data)   => httpClient.put(`/api/stations/${id}`, data);
export const deleteStation  = (id)         => httpClient.delete(`/api/stations/${id}`);