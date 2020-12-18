const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  return record.find(function(re){
    if (re.result==="W"){
      return (re).year;
    }
    else {
      return undefined;
    }
  })
}
