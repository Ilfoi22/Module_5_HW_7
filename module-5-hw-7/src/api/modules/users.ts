import { userUpdate } from "../../interfaces/userUpdate";
import apiClient from "../client";

export const getById = (id: string) =>
  apiClient({
    path: `users/${id}`,
    method: "GET",
  });

export const getByPage = (page: number) =>
  apiClient({
    path: `users?page=${page}`,
    method: "GET",
  });

export const updateUser = (user: userUpdate) =>
  apiClient({
    path: `users/${user.id}`,
    method: "POST",
    data: user,
  });
