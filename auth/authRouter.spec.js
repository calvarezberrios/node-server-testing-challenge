const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/db-config.js");

describe("Auth Router", () => {
    describe("POST /api/auth/register", () => {
        let res = {};
        beforeAll(async () => {
            try {

                
                res = await request(server)
                            .post("/api/auth/register")
                            .send({
                                "fname": "Carlos",
                                "lname": "Alvarez",
                                "email": "carlos-alvarez-berrios@lambdastudents.com",
                                "username": "calvarez",
                                "password": "1234"
                            });
            } catch (err) {
                console.log(`Error ${err}`);
            }
            
        });

        test("should return a status 201 Created", () => {
            expect(res.status).toEqual(201);
        });

        test("should return an object that has the username of the user created", () => {
            expect(res.body.username).toEqual("calvarez");
        });

        
    });

    describe("POST /api/auth/login", () => {
        let res = {};
        beforeAll(async () => {
            try {
                res = await request(server)
                            .post("/api/auth/login")
                            .send({username: "calvarez", password: "1234"});
            } catch (err) {
                console.log(`Error ${err}`);
            }
            
        });

        test("should return a status 200 OK", () => {
            expect(res.status).toEqual(200);
        });

        test("should return an object that has the username of the user logged on", () => {
            expect(res.body.username).toEqual("calvarez");
        });

        test("should fail with status 403 Forbidden", async () => {
            let res = await request(server).post("/api/auth/login")
                        .send({username: "mannie", password: "1234"});
            expect(res.status).toEqual(403);
        });

        test("cleans out the database after all tests", async () => {
            await Promise.all([db("income").truncate(), db("users").truncate()]);
        });
    });
})