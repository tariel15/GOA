#https://www.codewars.com/kata/517abf86da9663f1d2000003/train/python
def to_camel_case(text):
    words = text.replace('_', '-').split('-')
    return words[0] + ''.join([x.title() for x in words[1:]])