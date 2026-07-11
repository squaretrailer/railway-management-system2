// src/services/scheduleService.js

import httpClient from "./httpClient";

export const getSchedules    = ()           => httpClient.get("/api/schedules");
export const getScheduleById = (id)         => httpClient.get(`/api/schedules/${id}`);
export const addSchedule     = (data)       => httpClient.post("/api/schedules", data);
export const updateSchedule  = (id, data)   => httpClient.put(`/api/schedules/${id}`, data);
export const deleteSchedule  = (id)         => httpClient.delete(`/api/schedules/${id}`);
export const assignPlatform  = (id, data)   => httpClient.patch(`/api/schedules/${id}/platform`, data);