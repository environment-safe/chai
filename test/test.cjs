//lol, testing itself?
const chaiModule = require('chai');
const { chai } = '../environment-safe-chai.cjs'

describe('environment-safe-chai', ()=>{
   describe('performs a simple test suite', ()=>{
        it('works as expected', ()=>{
            should.exist(chai.should);
            const thisShould = chai.should();
            should.exist(thisShould);
            should.exist(thisShould.fail);
            should.exist(thisShould.fail);
            should.exist(thisShould.equal);
            should.exist(thisShould.Throw);
            should.exist(thisShould.not);
        });
    });
});
