#```1) მოხმარებელს შემოატანინეთ რიცხვი, შემდეგ კი დაუბეჭდეთ ეს რიცხვი დადებითია, უარყოფითი თუ ნეიტურალი ანუ ნული. შემდეგ კომენტარებით ახსენით რა გასნხვავებაა if-სა და elif-ს შორის რატომ არ შეიძლება ზოგერ elif-ს ნაცვლად if-ის გამოყენება```

number=input("enter a number") #შემოიტანე რიცხვი
if number >0:                
    print("number is positive") #if ვიყენებთ პირველი პირობის შესრულებისთვის
elif number <0:
    print("number is negative") #elif დამატებითი პირობის შესრულებისთვის
else: number == 0
print("number is neitraluri")