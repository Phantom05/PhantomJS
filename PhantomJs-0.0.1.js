// hello PhantomJs!

/*
[Array Area]
*/

//Delete the target string in Array

Array.prototype.delStr = function(p){
  let idx = this.indexOf(p);
  if(p.length == this[idx].length){
    let num = this.splice(idx,1);
    return num;
  }
}

