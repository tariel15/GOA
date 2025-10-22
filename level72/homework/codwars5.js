//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
function DNAStrand(dna){
  //your code here
  var result= "";
		  for(var i =0; i<dna.length; i++) 
		  {
        if (dna[i]==="A") 
       {
        result +="T";
       }
        else if (dna[i]==="T") 
       {
        result += "A";
        }
        else if (dna[i]==="C")
        {
        result +="G";
        }
        else if (dna[i]==="G")
        {
        result += "C";
        }
        else {
        result +=dna[i];
        }
		 }
     return result;
	}