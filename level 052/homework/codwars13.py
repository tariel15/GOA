#https://www.codewars.com/kata/546f922b54af40e1e90001da/train/python

def alphabet_position(s):
    return " ".join(str(ord(c)-ord("a")+1) for c in s.lower() if c.isalpha())