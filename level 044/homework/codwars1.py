#https://www.codewars.com/kata/5556282156230d0e5e000089/train/python
def dna_to_rna(dna):
    dna_list = []
    for letter in dna:
        if letter == "T":
            dna_list.append('U')
        else:
            dna_list.append(letter)
    return ''.join(dna_list)