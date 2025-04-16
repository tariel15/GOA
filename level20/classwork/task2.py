#```2) მომხმარებელს შემოატანინეთ რიცხვი, შემდეგ თუ ეს რიცხვი დადებითია დაბეჭდეთ ეს და კიდევ შეამოწმეთ ლუწია თუ კენტი, ხოლო თუ არაა დადებითი მხოლოდ დაბეჭდეთ რომ უარყოფითია```
number=input("enter a number")
if number >0:
    print("number is positive")
    if number %2==0:
        print("even")
    else:
        print("odd")
else:
    print("number is negative")