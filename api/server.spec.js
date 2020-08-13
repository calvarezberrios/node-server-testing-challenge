const request = require("supertest");
const server = require("./server.js");

describe("server.js", () => {
    describe("GET /", () => {
        let res = {};
        beforeAll(async () => {
            res = await request(server).get("/");
        });

        it("should return status 200 OK", () => {
            expect(res.status).toBe(200);
        });

        it("should return an object like {api: 'up'}", () => {
            expect(res.body).toEqual({api: "up"});
        });
    })
});