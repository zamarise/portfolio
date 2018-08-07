const chai = require('chai');
const server = require('../server.js');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('Server', function() {
  it('should list ALL on /contact GET', function(done) {
    chai
      .request(server)
      .get('/contact')
      .end(function(err, res) {
        res.should.have.status(200);
        done();
      });
  });
});
