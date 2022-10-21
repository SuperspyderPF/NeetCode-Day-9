function firstMissingPositive(n, jz = new Set(), sol = 1){
    for(c of n) if(c > 0) jz.add(c)
    while(jz.has(sol)) ++sol 
    return sol
}