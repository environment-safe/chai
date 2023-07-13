/* global describe : false */
import { it } from '@open-automaton/moka';
import * as chaiModule from 'chai';
import { chai } from '../src/index.mjs';
const should = ((
    typeof process === 'object' && 
    typeof process.versions === 'object' && 
    typeof process.versions.node !== 'undefined'
)?chaiModule:window.chai).should();

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
