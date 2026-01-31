#https://www.codewars.com/kata/52ebe4608567ade7d700044a/train/python
CARDS = [b+a for a in 'cdhs' for b in 'A23456789TJQK']

def encode(cards):
    return sorted([CARDS.index(card) for card in cards])

def decode(cards):
    return [CARDS[i] for i in sorted(cards)