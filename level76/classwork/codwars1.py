#https://www.codewars.com/kata/563089b9b7be03472d00002b/train/python
class List(object):
    def remove_(self, integer_list, values_list):
        return [i for i in integer_list if i not in values_list]