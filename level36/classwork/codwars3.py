#https://www.codewars.com/kata/65128732b5aff40032a3d8f0/train/python
def neutralise(s1, s2):
    result = ""
    for index in range(len(s1)):
        if s1[index] == s2[index]:
            result += s1[index]
        else:
            result += "0"
    return result