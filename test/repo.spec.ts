import * as path from "path"
import * as dotenv from "dotenv"
import * as chai from "chai"
import * as assert from "assert"
const expect = chai.expect

const envPath = path.resolve(__dirname + "/../.env.test")
dotenv.config({ path: envPath })

import { UserRepository } from "../src/repository/user.repository"

describe("Test user repository", () => {
    
    it("Test if getUser returns correct results", () => {
        
        return UserRepository.getUsers(3, 0)
            .then((results) => {
                expect(results.length).to.equal(3)
            })
            .catch(e => {
                console.log(e)
                assert.fail(e)
            })

    })
})