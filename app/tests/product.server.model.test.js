'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	Product = mongoose.model('Product');

/**
 * Unit tests
 */


describe('Product Model', function() {

    describe('Saving', function() {
        it('saves new record', function(done) {

	
            var product = new Product({
            	category : '5945345ac53d0a6c0a419c73',
            	name : 'Pakola Doodh Soda',
            	quantityPerUnit :'25ml',
            	unitPrice : 20,
            	unitsInStock : 10
	        });

            product.save(function(err, saved) {
                should.not.exist(err);
                done();
            });
        });

		    it('throws validation error when category is empty or invalid', function(done) {   
            var product = new Product({
                 name: 'Pakola'
            });

            product.save(function(err) {
                should.exist(err);
               
                done();
            });
        });


		    it('throws validation error when name is empty', function(done) {   
            var product = new Product({
                 category: 'Beverages'
            });

            product.save(function(err) {
                should.exist(err);
             
                done();
            });
        });

		it('throws validation error when name longer than 15 chars');
		
		it('throws validation error for duplicate Product name');
	});

});