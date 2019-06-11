import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../app';

const { expect } = chai;
chai.use(chaiHttp);

describe('POST /api/v1/auth/signup', () => {
  it('should return a 422 status if first name is not provided', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        lastName: 'last',
        email: 'email@localhost.io',
        password: 'password',
      })
      .end((error, res) => {
        if (error) done(error);
        expect(res).to.be.an('object');
        expect(res).to.have.status(422);
        expect(res.body).to.have.keys('status', 'message');
        expect(res.body.status).to.deep.equal('error');
        expect(res.body.message).to.deep.equals('invalid names');
        done();
      });
  });
  it('should return a 422 status if first name has invalid characters', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstName: '45first',
        lastName: 'last',
        email: 'email@localhost.io',
        password: 'password',
      })
      .end((error, res) => {
        if (error) done(error);
        expect(res).to.be.an('object');
        expect(res).to.have.status(422);
        expect(res.body).to.have.keys('status', 'message');
        expect(res.body.status).to.deep.equal('error');
        expect(res.body.message).to.deep.equals('invalid names');
        done();
      });
  });

  it('should return a 422 status if first name has more than 20 characters', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstName: 'adklfkjad;fkjadkfjadlkfjadklfjkdfjakfjadlfkjdlfjalkfjddlkafjkajdfkjdffkdf',
        lastName: 'last',
        email: 'email@localhost.io',
        password: 'password',
      })
      .end((error, res) => {
        if (error) done(error);
        expect(res).to.be.an('object');
        expect(res).to.have.status(422);
        expect(res.body).to.have.keys('status', 'message');
        expect(res.body.status).to.deep.equal('error');
        expect(res.body.message).to.deep.equals('invalid names');
        done();
      });
  });
  it('should return a 422 status if last name is not provided', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstName: 'first',
        email: 'email@localhost.io',
        password: 'password',
      })
      .end((error, res) => {
        if (error) done(error);
        expect(res).to.be.an('object');
        expect(res).to.have.status(422);
        expect(res.body).to.have.keys('status', 'message');
        expect(res.body.status).to.deep.equal('error');
        expect(res.body.message).to.deep.equals('invalid names');
        done();
      });
  });
  it('should return a 422 status if last name has invalid characters', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstName: 'first',
        lastName: ')55last',
        email: 'email@localhost.io',
        password: 'password',
      })
      .end((error, res) => {
        if (error) done(error);
        expect(res).to.be.an('object');
        expect(res).to.have.status(422);
        expect(res.body).to.have.keys('status', 'message');
        expect(res.body.status).to.deep.equal('error');
        expect(res.body.message).to.deep.equals('invalid names');
        done();
      });
  });

  it('should return a 422 status if last name has more than 20 characters', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstName: 'first',
        lastName: 'aldkfja;dfakfjldfjdfjdkfjdkfjlkdfjkfjdklfjldkfjlkfjldjdklfjkdjfkfjldfjkdfjdl',
        email: 'email@localhost.io',
        password: 'password',
      })
      .end((error, res) => {
        if (error) done(error);
        expect(res).to.be.an('object');
        expect(res).to.have.status(422);
        expect(res.body).to.have.keys('status', 'message');
        expect(res.body.status).to.deep.equal('error');
        expect(res.body.message).to.deep.equals('invalid names');
        done();
      });
  });
  it('should return a 422 status if email was not provided', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstName: 'first',
        lastName: 'last',
        password: 'password',
      })
      .end((error, res) => {
        if (error) done(error);
        expect(res).to.be.an('object');
        expect(res).to.have.status(422);
        expect(res.body).to.have.keys('status', 'message');
        expect(res.body.status).to.deep.equal('error');
        expect(res.body.message).to.deep.equals('email was not provided');
        done();
      });
  });
  it('should return a 422 status if email is invalid', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstName: 'first',
        lastName: 'last',
        email: '#ad@@g@.',
        password: 'password',
      })
      .end((error, res) => {
        if (error) done(error);
        expect(res).to.be.an('object');
        expect(res).to.have.status(422);
        expect(res.body).to.have.keys('status', 'message');
        expect(res.body.status).to.deep.equal('error');
        expect(res.body.message).to.deep.equals('invalid email');
        done();
      });
  });

  it('should return a 422 status if password was not provided', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstName: 'first',
        lastName: 'last',
        email: 'email@localhost.io',
      })
      .end((error, res) => {
        if (error) done(error);
        expect(res).to.be.an('object');
        expect(res).to.have.status(422);
        expect(res.body).to.have.keys('status', 'message');
        expect(res.body.status).to.deep.equal('error');
        expect(res.body.message).to.deep.equals('password was not provided');
        done();
      });
  });

  it('should return a 201 status if account was created', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstName: 'first',
        lastName: 'last',
        email: 'email@localhost.io',
        password: 'password',
      })
      .end((error, res) => {
        if (error) done(error);
        expect(res).to.be.an('object');
        expect(res).to.have.status(201);
        expect(res.body).to.have.keys('status', 'data', 'message');
        expect(res.body.data).to.have.keys('token', 'id', 'firstName', 'lastName', 'email');
        expect(res.body.status).to.deep.equal('success');
        expect(res.body.message).to.deep.equals('welcome, first!');
        expect(res.body.data.firstName).to.deep.equals('first');
        expect(res.body.data.lastName).to.deep.equals('last');
        expect(res.body.data.email).to.deep.equals('email@localhost.io');
        done();
      });
  });

  it('should return a 409 status if account exists', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstName: 'first',
        lastName: 'last',
        email: 'email@localhost.io',
        password: 'password',
      })
      .end((error, res) => {
        if (error) done(error);
        expect(res).to.be.an('object');
        expect(res).to.have.status(409);
        expect(res.body).to.have.keys('status', 'message');
        expect(res.body.status).to.deep.equal('error');
        expect(res.body.message).to.deep.equals('email is already in use');
        done();
      });
  });
});
