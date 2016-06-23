import {assert} from 'chai';
import * as utils from '../lib';

describe('general-js-utils common类测试', () => {
  it('random', () => {
    assert.isNumber(utils.random());
  });
  it('isObject', () => {
    assert.isTrue(utils.isObject({}));
    assert.isFalse(utils.isObject(2));
  });

  it('isObjectEmpty',()=>{
    assert.isTrue(utils.isObjectEmpty({}));
    assert.isFalse(utils.isObjectEmpty("xx"));
    assert.isFalse(utils.isObjectEmpty({"x":"y"}));
  });

  it('uniqueArray',()=>{
    const uniqArr = utils.uniqueArray([1,1,1,2,2,2,3,3,4]);
    const obj = {};
    let flug = false;
    for(let i=0;i<uniqArr.length;i++){
      if(obj[uniqArr[i]]){
        flug = true;
      }
      obj[uniqArr[i]]=1;
    }
    assert.isFalse(flug);
  });

  it('randomNumber',()=>{
    assert.isNumber(utils.randomNumber(6));
  });
});


describe('general-js-utils date类测试', () => {

it('time',()=>{
  const date = utils.time();
  assert.isNumber(date);
});

});
