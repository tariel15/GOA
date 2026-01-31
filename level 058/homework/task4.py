#5) შექმენით Fighter კლასი და გაუწერეთ ატრიბუტები health, damage, speed და მეთოდი heal. შემდეგ მისგან მემკვიდრეობით შექმენით 2 კლასი Archer და Mage. დაამატეთ შესაბამისი ატრიბუტები range, reload და spell, mana. შემდეგ ამ კლასებით შექმენით მოცემული ობიექტები და კიდევ რამდენიმე თქვენით მოიფიქრეთ
#ninja
#samurai
#viking
#warrior
#veteran
#tribesman
#necromancer
class Fighter:
    def init(self, health, damage, speed):
        self.health = health
        self.damage = damage
        self.speed = speed

    def heal(self, amount):
        self.health += amount
        print(f"{self.name} healed by {amount}. Health is now {self.health}.")

class Archer(Fighter):
    def init(self, health, damage, speed, range, reload):
        super().init(health, damage, speed)
        self.range = range
        self.reload = reload

class Mage(Fighter):
    def init(self, health, damage, speed, spell, mana):
        super().init(health, damage, speed)
        self.spell = spell
        self.mana = mana

ninja = Fighter(health=100, damage=20, speed=20)
samurai = Fighter(health=120, damage=35, speed=10)
viking = Fighter(health=100, damage=25, speed=18)
warrior = Fighter(health=100, damage=27, speed=19)
veteran = Fighter(health=110, damage=22, speed=27)
tribesman = Archer(health=50, damage=34, speed=26, range=25, reload=2)
necromancer = Mage(health=60, damage=44, speed=22, spell="skeleton army", mana=120)
