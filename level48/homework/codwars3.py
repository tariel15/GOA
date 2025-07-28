#https://www.codewars.com/kata/57eae65a4321032ce000002d/train/python
def fake_bin(x):
    result = ""
    for num in x:
        if int(num) < 5:
            result = result + "0"
        else:
            result = result + "1"
    return result