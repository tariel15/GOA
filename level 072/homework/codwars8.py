#https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/python
def to_jaden_case(string):
    list = string.split()
    new_list = [i.capitalize() for i in list]
    return ' '.join(new_list)