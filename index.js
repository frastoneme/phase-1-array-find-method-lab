// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"}, //Denver Broncos football results
    { year: "2013", result: "L"},
  ]
  superbowlWin = (record) => {
    const result = record.find( record => record.result === "W" );
    return result ? result.year : undefined; // changing to truthy and falsy
  }
  console.log(superbowlWin(record));
