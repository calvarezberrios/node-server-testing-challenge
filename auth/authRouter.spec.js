const request = require("supertest");
const server = require("../api/server.js");

describe("Auth Router", () => {
    describe("POST /api/auth/register", () => {
        let res = {};
        beforeEach(async () => {
            try {
                res = await request(server)
                            .post("/api/auth/register")
                            .send({
                                fname: "Carlos",
                                lname: "Alvarez",
                                email: "carlos-alvarez-berrios@lambdastudents.com",
                                username: "calvarez",
                                password: "1234"
                            });
            } catch (err) {
                console.log(`Error ${err}`);
            }
            
        });

        it("should return a status 201 Created", () => {
            expect(res.status).toBe(201);
        })

        it("should return an object returning the user created", () => {
            expect(res.body).toHaveProperty("message");
        })
    })
})