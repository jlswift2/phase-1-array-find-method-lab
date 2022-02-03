// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"}
  ]

function superbowlWin(array) {
    let helpMe = array.find( element =>  element.result === "W")
    if (helpMe === undefined){
        return undefined
    } else {
        return helpMe.year
    }
}


  

