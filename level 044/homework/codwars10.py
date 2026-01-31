#https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/python 
def sum_two_smallest_numbers(num_list):
    num_list.sort()
    return num_list[0] + num_list[1]