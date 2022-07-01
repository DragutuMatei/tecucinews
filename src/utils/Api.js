import axios from "axios";

export class Api{
    #instanta;

    constructor() {
        this.#instanta = axios.create({
            baseURL: "http://localhost:8080/api",
            withCredentials: true,
            headers: { "content-type": "application/json" },
            method: "POST",
        })
    }

    async post(path, data, options={} ) {
        return await this.#instanta.post(path, data, options);
    }

    async get(path, options={} ) {
        return await this.#instanta.get(path, options);
    }
}