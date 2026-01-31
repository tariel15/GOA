#https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/python
def DNA_strand(dna):
    # code here
    dnaComplement=""
    for string in dna:
        if string=="A":
            dnaComplement+="T"
        elif string =="T":
            dnaComplement+="A"
        elif string =="G":
            dnaComplement+="C"
        elif string == "C":
            dnaComplement+="G"
    return dnaComplement