function replaceElements(a, sol = new Array(a.length)){
    sol[a.length-1]=-1;
    for(i=a.length-1;i>0;i-=1) sol[i-1]=Math.max(a[i],sol[i]);
    return sol;
};