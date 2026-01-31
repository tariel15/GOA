#2) შექმენით Fighter კლასი და გაუწერეთ მინიმუმ 3 ატრიბუტი, შემდეგ შექმნით ამ კლასის 3 ინსტანცია და დაბეჭდეთ ერთ-ერთის თვისებები. დაწერეთ ობიექტზე ორინეტირებული პროგრამირება
class fighter():
    def __init__(self,health,name,stamina):
        self.health="health"
        self.name="name"
        self.stamina="stamina"

fighter1= fighter(100,"tariel",70)
fighter2= fighter(90,"ana",40)
fighter3= fighter(60,"ani",30)
print(fighter1.health, fighter1.name, fighter2.stamina)