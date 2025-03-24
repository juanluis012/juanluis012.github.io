const assert=require("node:assert")
const { sum, rest, mult, div }=require("./calc")

function testSum (){
  assert.strictEqual(sum(1,2),3,"1 + 2 deberia ser 3")
  assert.strictEqual(sum(3,2),5,"3 + 2 deberia ser 5") 
  assert.strictEqual(sum(4,2),6,"4 + 2 deberia ser 6") 
  assert.strictEqual(sum(5,2),7,"5 + 2 deberia ser 7") 
}

function testRest (){
  assert.strictEqual(rest(2,1),1,"2 - 1 deberia ser 1")
  assert.strictEqual(rest(3,2),1,"3 - 2 deberia ser 1") 
  assert.strictEqual(rest(4,2),2,"4 - 2 deberia ser 2") 
  assert.strictEqual(rest(5,2),3,"5 - 2 deberia ser 3") 
}

function testMult (){
  assert.strictEqual(mult(1,2),2,"1 * 2 deberia ser 2")
  assert.strictEqual(mult(3,2),6,"3 * 2 deberia ser 6") 
  assert.strictEqual(mult(4,2),8,"4 * 2 deberia ser 8") 
  assert.strictEqual(mult(5,2),10,"5 * 2 deberia ser 10") 
}

function testDiv (){
  assert.strictEqual(div(2,1),2,"2 / 1 deberia ser 2")
  assert.strictEqual(div(3,3),1,"3 / 3 deberia ser 1") 
  assert.strictEqual(div(4,2),2,"4 / 2 deberia ser 2") 
  assert.strictEqual(div(6,2),3,"6 / 2 deberia ser 3") 
}

testSum()
testRest()
testMult()
testDiv() 