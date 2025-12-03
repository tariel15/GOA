#https://www.codewars.com/kata/54129112fb7c188740000162/train/python
def prefill(n=0,v=None):
    try:
        return [v] * int(n)
    except:
        raise TypeError(str(n) + ' is invalid')