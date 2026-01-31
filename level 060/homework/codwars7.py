#https://www.codewars.com/kata/54da5a58ea159efa38000836/train/python
def find_it(seq):
    for elem in set(seq):
        if seq.count(elem) % 2 == 1:
            return elem