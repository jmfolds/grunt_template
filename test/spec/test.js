/* global describe, it */

(function () {
    'use strict';


    describe('Some Tests', function () {
        describe('Sub Tests', function () {

            it( 'should pass', function () {
				1.should.equal(1);
            });
        });
    });
})();