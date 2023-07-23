import http from "./httpservice";

export function getOneContact(id){
    return http.get(`/users/${id}`)
}
