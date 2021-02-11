"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    // contructors
    constructor(data) {
        this.id = null;
        this.name = null;
        this.email = null;
        if (data) {
            this.hydrate(data);
        }
    }
    hydrate(data) {
        for (let prop in data) {
            if (this.hasOwnProperty(prop)) {
                this[prop] = data[prop];
            }
        }
    }
}
exports.User = User;
