import http from "./httpservice";

export function addContact(data){
    return http.post(`/users/`,data)
}
