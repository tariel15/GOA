#https://www.codewars.com/kata/635fc0497dadea0030cb7936/train/python
def count_different_matrices(matrices):
    dictionary = dict()
    for i in matrices:
        if tuple(i) not in matrices:
            dictionary[tuple(i)] = 1
        else:
            dictionary[tuple(i)] += 1
    set1 = set()
    count = 0
    for i in matrices:
        i1 = tuple(i)
        i2 = tuple([i[2], i[0], i[3], i[1]])
        i3 = tuple([i[3], i[2], i[1], i[0]])
        i4 = tuple([i[1], i[3], i[0], i[2]])
        if i1 not in set1 and i2 not in set1 and i3 not in set1 and i4 not in set1:
            set1.add(i1)
            set1.add(i2)
            set1.add(i3)
            set1.add(i4)
            count += 1
    return count