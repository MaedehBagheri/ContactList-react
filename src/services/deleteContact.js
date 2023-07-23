import http from "./httpservice";

export function deleteContact(id){
    return http.delete(`/users/${id}`)
}

