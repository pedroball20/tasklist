const request = require("supertest");
const index = require("../../../../pages/api/task/index");

const mockResponse = () => {
    const res = {};
    res.status = jest.fn(() => {
        res = {}
        res.send = jest.fn().mockReturnValue(res)
        return res
    }).mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res;
};
describe("Test the index path", () => {
    test("It should response the GET method", () => {
        mockResponse();
        return request(index)
          .get(`/?email=pedroball0120@gmail.com`)
          .expect(201);
      });
});