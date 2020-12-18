const testVar = {}

function testFunc(c) {
  return c.year
  return "hi"
}

const  c = function superbowlWin(record) {
  return record.find(function(re){
    if (re.result==="W"){
      return re.year;
    }
    else {
      return undefined;
    }
  })
}
console.log(c.years)
