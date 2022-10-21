function nonConstructibleChange(c, cd = 1,  sc = c.sort((a,b) => a-b)) {
    for(let i = 0; i < sc.length ; i += 1) {
      if(cd < sc[i]) return cd
      cd += sc[i]
    }
    return cd;
  }