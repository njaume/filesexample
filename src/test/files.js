//During the test the env variable is set to test
process.env.NODE_ENV = "test";

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
const config = require("../config");
let should = chai.should();
var expect = chai.expect;

chai.use(chaiHttp);

describe("Files", () => {
  /*
   * Test the /GET files route
   */
  describe("/GET files", () => {
    it("it should GET all the files", (done) => {
      chai
        .request(`http://localhost:${config.port}`)
        .get("/files/data")
        .end((err, res) => {
          console.log("body", res.body);
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.every((i) => expect(i).to.have.all.keys("file", "lines"));
          done();
        });
    });
  });
});
