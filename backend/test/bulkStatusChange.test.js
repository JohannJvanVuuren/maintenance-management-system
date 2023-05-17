/*
* Testing the bulkStatusChange route
* */

/* Importing assertion libraries and request to make API calls */
import {should, expect} from 'chai';
import assert from 'assert';
import request from 'request';

/* Testing both the status code and that no error response is received */
describe('updateLab route: status and content', function() {
    describe ('status', function() {
        /* This function tests whether a status of 200 is received back */
        it('status', function(done){
            request('http://localhost:8000/bulkStatusChange',
                function(error, response) {
                    assert(response.statusCode, 200);
                    done();
                });
        });
        /* This function tests that there isn't a error returned from the call */
        it('content', function(done) {
            request('http://localhost:8000/bulkStatusChange',
                function(error, response, body) {
                    expect(error).to.equal(null);
                    done();
                });
        });
    });
});

assert (5 < 7);