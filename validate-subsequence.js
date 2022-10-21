function isValidSubsequence(a, s, sID = 0,z=s.length) {
    for(v of a) if(s[sID] === v) sID++
    return sID === z
  }
  
  // Do not edit the line below.
  exports.isValidSubsequence = isValidSubsequence;
  