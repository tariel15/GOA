#https://www.codewars.com/kata/5d98b6b38b0f6c001a461198/train/python
def code(strng):
    dict = {'0': '10', '1': '11', '2': '0110', '3': '0111', '4': '001100', '5': '001101', '6': '001110', '7': '001111', '8': '00011000', '9': '00011001'}
    u = map(lambda r: dict[r], [ strng[i] for i in range(0, len(strng)) ])
    return ''.join(u)
def decode(strng):
    ret = ""
    i = 0
    lg = len(strng)
    while (i < lg):
        zero_i = i
        while ((zero_i < lg) and (strng[zero_i] != '1')):
            zero_i += 1
        l = zero_i - i + 2 
        ret += str(int(strng[zero_i + 1:zero_i + l], 2))
        i = zero_i + l
    return ret