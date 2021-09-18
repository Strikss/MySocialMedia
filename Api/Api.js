import axios from "axios";
import { setUsers } from "../Redux/usersReducer";

const instance =axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "d0be37e1-edcf-49b4-934d-161e99adcc12"}
})
export const userApi={
    getUsers(currentPage = 1,pageSize = 5){
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`
          )
          .then(response=>response.data)
        },
    setUsers(n, pageSize){
            return instance.get(`users?page=${n}&count=${pageSize}`)
            .then(response=>response.data)
        }
}
