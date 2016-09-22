function makeConsoleLog(val){
  return function(){
    console.log( val );
  }
}

function bizarreSort( arr ){
  for( var i = 0; i < arr.length; i++ ) {
    setTimeout( makeConsoleLog(arr[i]), arr[i]*10+50 );
  }
}

bizarreSort( [77, 1, 60, 33, 76, 600, 0, 5] );