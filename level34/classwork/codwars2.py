#https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/python
def get_count(sentence):
    Vowel="aeiou"
    Vowel_count=0
    for char in sentence:
        if char in Vowel:
            Vowel_count +=1
    return Vowel_count