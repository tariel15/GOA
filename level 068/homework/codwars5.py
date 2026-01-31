#https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/python
def remove_duplicate_words(s):
    s = s.split(" ")
    words = []
    for item in s:
        if item not in words:
            words.append(item)
    return " ".join(words)