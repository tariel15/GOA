#9) სთხოვეთ მომხმარებელს შეიყვანოს რიცხვი "input()"-ით და გადააკეთეთ "int"-ად. გამოიყენეთ "try" და "except", რომ გაუმკლავდეთ შეცდომას თუკი სიმბოლოები შეიყვანეს. დაბეჭდეთ „შეიყვანეთ მხოლოდ რიცხვი“
try:
    one=int(input("enter a number"))
    two=int(input("enter a devided"))
    print(one/two)
except ZeroDivisionError:
    print("cant devide with zero")
except ValueError:
    print("enter a number")
else:
    print("sucesfully bevided")
finally:
    print("finished")