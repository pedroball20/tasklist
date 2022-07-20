const request = require("supertest");
const index = require("../../../../pages/api/task/index");

describe("Test the index path", () => {
    test("It should response the GET method", () => {
        return request(index)
          .get(`/?email=pedroball0120@gmail.com`)
          .expect(201);
      });
});