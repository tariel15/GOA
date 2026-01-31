#https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/python
def remove_smallest(numbers):
    if not numbers:
        return numbers
    else:
        new = numbers[:]
        new.remove(min(numbers))
    return new
        