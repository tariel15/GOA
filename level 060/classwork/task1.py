#1) შექმენით account კლასი რომელშიც გექნებათ ერთი protected და private ატრიბუტები და მეთდები. დაამატეთ ერთი კლასის მეთოდი რომელიც დაითვლის ამ კლასის მატარებლი ობიექტების რაოდენობას. კომენტარებით დაწერეთ protected და private ატრიბუტების განმარტება და ასევე კლასს და სტატიკიური მეთოდების დანიშნულება
class account:
    count=0
    def __init__(self,owner,balance):
        self.owner=owner
        self.balance=balance
        account.count +=1
        def get_owner(self):
            return self._owner
        def get_balance(self):
            return self._balance
        @classmethod
        def get_object_count(cls):
            return cls._object_count
        #კლასის ატრიბუტი გამოიყენება ობიექტების საერთოდ გამოსაყენებლად
        #privet მხოლოდ კლასის შიგნით გამოიყენება
        #class method მეთოდი რომლის მუშაობას კლასზე და არა კონკრეტულ ობიექტზე