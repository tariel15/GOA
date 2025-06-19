#https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/train/python
def capitalize(s, ind):
    s_new = ""
    for index, char in enumerate(s, 0):
        if index in ind:
            s_new += char.upper()
        else:
            s_new += char

    return s_new