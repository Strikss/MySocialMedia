import axios from "axios";
const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "d0be37e1-edcf-49b4-934d-161e99adcc12" },
});
export const userApi = {
  getUsers(currentPage = 1, pageSize = 5) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  setUsers(n, pageSize) {
    return instance
      .get(`users?page=${n}&count=${pageSize}`)
      .then((response) => response.data);
  },
  unFollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
};
export const authApi = {
  auth() {
    return instance.get("auth/me");
  },
  logIn(email, password, rememberMe = false) {
    return instance.post("auth/login", { email, password, rememberMe });
  },
  logOut() {
    return instance.delete("auth/login");
  },
};
export const profileApi = {
  getUserId(userId) {
    return instance.get(`/profile/` + userId);
  },
  getStatus(userId) {
    return instance.get(`/profile/status/` + userId);
  },
  setStatus(status) {
    return instance.put(`/profile/status/`, { status });
  },
};
