const matrix = require('../matrix')
const gauss = require('../gauss_functions')
const sinon = require('sinon')
const assert = require('chai')

describe("matrix", function() {            
    it(`get_matrix`, function() {
        var mtrx = new matrix
        var matrixMock = sinon.mock(mtrx)
        matrixMock.expects("get_matrix")

        var n = mtrx.get_matrix(2)

        matrixMock.verify()        
    })  
    it(`get`, function() {
        var mtrx = new matrix(2)
        var matrixMock = sinon.mock(mtrx)
        matrixMock.expects("get").withArgs(0,0)
                
        var n = mtrx.get(0,0)

        matrixMock.verify()        
    }) 
    it(`set`, function() {
        var mtrx = new matrix(2)
        var matrixMock = sinon.mock(mtrx)
        matrixMock.expects("set").withArgs(0,0,1)

        var n = mtrx.set(0,0,1)

        matrixMock.verify()        
    }) 
    it(`get_rows`, function() {
        var mtrx = new matrix(2)
        var matrixMock = sinon.mock(mtrx)
        matrixMock.expects("get_rows")

        varn = mtrx.get_rows()

        matrixMock.verify()        
    })  
    it(`get_cols`, function() {
        var mtrx = new matrix(2)
        var matrixMock = sinon.mock(mtrx)
        matrixMock.expects("get_cols")

        varn = mtrx.get_cols()

        matrixMock.verify()        
    })  
    it(`mull_add`, function() {
        var mtrx = new matrix(2)
        var matrixMock = sinon.mock(mtrx)
        matrixMock.expects("mull_add")

        varn = mtrx.mull_add(0,0,2)

        matrixMock.verify()        
    })  
    it(`exists_wrong_row`, function() {
        var mtrx = new matrix(2)
        var matrixMock = sinon.mock(mtrx)
        matrixMock.expects("exists_wrong_row")

        varn = mtrx.exists_wrong_row()

        matrixMock.verify()        
    })  
    it(`exists_zero_row`, function() {
        var mtrx = new matrix(2)
        var matrixMock = sinon.mock(mtrx)
        matrixMock.expects("exists_zero_row")

        varn = mtrx.exists_zero_row()

        matrixMock.verify()        
    })  
    
})