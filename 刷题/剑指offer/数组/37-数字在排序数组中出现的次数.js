





function GetNumberOfK(data, k){
  return data.reduce(function(count, a){
    return a === k ? count+1 :count;
  }, 0);
}



function GetNumberOfK(data,k) {
  var count =0;
  for(var i =0 ;i<data.length;i++){
    if(data[i]==k){
      count++;
    }
  }
  return count;
}
