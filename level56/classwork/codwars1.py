#https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/python
def create_phone_number(n):
    m = ''.join(map(str, n))
    return f"({m[:3]}) {m[3:6]}-{m[6:]}"