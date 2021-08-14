var sloganMaker = function(array){
 
    array = [...new Set(array)]
    console.log(array)
    let answer = [array.slice()]
    let counterArray = new Array(array.length).fill(0)
    
    let   i = 1
    while (i < array.length) {
      if (counterArray[i] < i) {
        let temp = array[i];
        array[i] = array[0];
        array[0] = temp;
        counterArray[i]++;
        i = 1;
        answer.push(array.slice());
      } else {
        counterArray[i] = 0;
        i++;
      }
    }
    
  
    return array.length == 0 ? array : answer.map(e => e.join(' '))
    
  }
  var sloganMaker = function(array){
 
    array = [...new Set(array)]
    console.log(array)
    let answer = [array.slice()]
    let counterArray = new Array(array.length).fill(0)
    
    let   i = 1
    while (i < array.length) {
      if (counterArray[i] < i) {
        let temp = array[i];
        array[i] = array[0];
        array[0] = temp;
        counterArray[i]++;
        i = 1;
        answer.push(array.slice());
      } else {
        counterArray[i] = 0;
        i++;
      }
    }
    
  
    return array.length == 0 ? array : answer.map(e => e.join(' '))
    
  }

  var sloganMaker = function(array){
 
    array = [...new Set(array)]
    console.log(array)
    let answer = [array.slice()]
    let counterArray = new Array(array.length).fill(0)
    
    let   i = 1
    while (i < array.length) {
      if (counterArray[i] < i) {
        let temp = array[i];
        array[i] = array[0];
        array[0] = temp;
        counterArray[i]++;
        i = 1;
        answer.push(array.slice());
      } else {
        counterArray[i] = 0;
        i++;
      }
    }
    
  
    return array.length == 0 ? array : answer.map(e => e.join(' '))
    
  }
  

  var sloganMaker = function(array){
 
    array = [...new Set(array)]
    console.log(array)
    let answer = [array.slice()]
    let counterArray = new Array(array.length).fill(0)
    
    let   i = 1
    while (i < array.length) {
      if (counterArray[i] < i) {
        let temp = array[i];
        array[i] = array[0];
        array[0] = temp;
        counterArray[i]++;
        i = 1;
        answer.push(array.slice());
      } else {
        counterArray[i] = 0;
        i++;
      }
    }
    
  
    return array.length == 0 ? array : answer.map(e => e.join(' '))
    
  }
  
  var sloganMaker = function(array){
 
    array = [...new Set(array)]
    console.log(array)
    let answer = [array.slice()]
    let counterArray = new Array(array.length).fill(0)
    
    let   i = 1
    while (i < array.length) {
      if (counterArray[i] < i) {
        let temp = array[i];
        array[i] = array[0];
        array[0] = temp;
        counterArray[i]++;
        i = 1;
        answer.push(array.slice());
      } else {
        counterArray[i] = 0;
        i++;
      }
    }
    
  
    return array.length == 0 ? array : answer.map(e => e.join(' '))
    
  }
  
  
  