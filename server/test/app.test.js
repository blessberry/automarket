import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

const { expect } = chai;
chai.use(chaiHttp);

describe('GET /', () => {
  it('Should redirect to manual page', (done) => {
    chai.request(app)
      .get('/')
      .end((error, res) => {
        if (error) done(error);
        expect(res).to.redirect;
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe('GET /man', () => {
  it('Should render file', (done) => {
    chai.request(app)
      .get('/man')
      .end((error, res) => {
        if (error) done(error);
        expect(res).to.be.an('object');
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe('Wrong Path Handler', () => {
  it('Should send a 404 error if wrong endpoint is requested', (done) => {
    chai.request(app)
      .get('/somebullshitlikethisone')
      .end((error, res) => {
        if (error) done(error);
        expect(res).to.be.an('object');
        expect(res).to.have.status(404);
        expect(res.body.status).to.deep.equal('error');
        expect(res.body.message).to.deep.equal('Wrong api endpoint, does not exist');
        done();
      });
  });
});
