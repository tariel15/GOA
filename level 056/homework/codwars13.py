#https://www.codewars.com/kata/541c8630095125aba6000c00/train/python
def digital_root(n):
    root = 0
    for d in str(n):
        root += int(d)
    if len(str(root)) > 1:
        root = digital_root(root)
    return root