import http from "./httpservice";

export function get(){
    return http.get("/users")
}
