// hello PhantomJs library!

/*
[Array Area]
*/

// Delete the target string in Array

Array.prototype.delStr = function(p){
  let idx = this.indexOf(p);
  if(p.length == this[idx].length){
    let num = this.splice(idx,1);
    return num;
  }
}

// Sort method auto sorting "1,11,12,2,3 22,33" Troubleshooting.
Array.prototype.arraySort = function(){
  let allSort = function(p,t){
    return p-t;
  }
  return this.sort(allSort);
}

// Reverse of arraySort
Array.prototype.reverseArraySort = function(){
  let allSort = function(p,t){
    return t-p;
  }
  return this.sort(allSort);
}