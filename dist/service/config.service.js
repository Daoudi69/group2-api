"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
class ConfigService {
    constructor() {
        this.env = process.env.ENV;
        this.config = {
            DB_HOST: process.env.DB_HOST,
            DB_USER: process.env.DB_USER,
            DB_PASSWORD: process.env.DB_PASSWORD,
            DB_NAME: process.env.DB_NAME,
        };
    }
    all() {
        return this.config;
    }
    get(key) {
        return this.config[key];
    }
}
exports.Config = new ConfigService();
