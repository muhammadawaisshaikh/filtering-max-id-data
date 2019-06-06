// getting max id data and make a new array with that id based data
  getMax(arr) {
    var finalArr = [];

    // filtering max id data
    let max = arr.length;
    var dataMax = arr[max-1];

    // making new array with max id filtered data
    finalArr.push(dataMax);
    return finalArr;
  }
