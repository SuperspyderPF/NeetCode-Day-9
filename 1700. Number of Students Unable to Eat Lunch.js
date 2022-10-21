function countStudents(s, sa, sol=[0,0]){
    for(i=0; i<s.length; i++) sol[s[i]]++;
    for(j=0; j<sa.length; j++) if(--sol[sa[j]]<0) return sol[1-sa[j]]
    return 0;
};