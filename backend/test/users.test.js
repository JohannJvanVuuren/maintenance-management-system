/* This test is to evaluate the general functioning of the backend by evaluating the
*  dummy route /users */

/* Import of the expect assertion library from Chai */
const expect = require('chai').expect;
/* Import of the built-in node assert assertion library */
const assert = require('node:assert');
/* Import of the request module which makes possible the testing by making http calls */
const request = require('request');

/* The test block including the describe and it functions and callback functions */
describe('Testing of the /users route', () => {
    describe('/users route', () => {
        /* This function test whether a status of 200 is received back */
        it('Testing the status of the request', (done) => {
            request('http://localhost:8000/users', (error, response) => {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('Testing the content received back', (done) => {
            request('http://localhost:8000/users', (error, response, body) => {
                expect(body).to.equal('respond with a resource');
                done();
            });
        });
    });

});

assert(5 < 7);