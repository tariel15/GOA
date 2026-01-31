#https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/python
def distinct(seq):
    seen = set()
    result = []
    for item in seq:
        if item not in seen:
            seen.add(item)
            result.append(item)
    return result