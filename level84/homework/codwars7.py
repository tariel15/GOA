#https://www.codewars.com/kata/517b2bcf8557c200b8000015/train/python
Position = {'high': 'h', 'low': 'l'}

class Warrior:
    def __init__(self, name):
        self.name = name
        self.health = 100
        self.block = ""
        self.deceased = self.zombie = 0
        
    def attack(self, a, b):
        a.set_health(a.health - (a.block != b and 5 + (b == "h") * 5 + (not a.block) * 5))
    
    def set_health(self, n):
        self.health = max(0, n)
        self.zombie = self.deceased
        self.deceased = not self.health