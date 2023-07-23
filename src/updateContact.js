import http from "./services/httpservice";

export function updateContact(id,data){
    return http.put(`/contacts/${id}`,data)
}
