import * as assert from "assert"
import * as chai from "chai"
const expect = chai.expect
import { User } from"../src/model/User"

const data = {
    id: 5, 
    surname: "Ben",
    name: "John",
}
const user: any = new User(data)

describe("Test models", () => {

    it("Test if user model is valid", () => {
        expect(user.id).to.equal(5)
        expect(user.name).to.equal("John")
        expect(user.surname).not.to.equal("Ben")
    })
})