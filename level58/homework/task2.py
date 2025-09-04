#3) შექმენით კლასი BankAccount, რომელსაც ექნება balance. დაამატეთ მეთოდი deposit(amount), რომელიც balance-ს თანხას დაუმატებს
class BankAccount:
    def init(self, balance=0):
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount