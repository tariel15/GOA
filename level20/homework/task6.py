#6) მომხმარებელმა უნდა შეიყვანოს რიცხვები, სანამ -1-ს არ შეიყვანს. საბოლოოდ გამოიანგარიშოს შეყვანილი რიცხვების საშუალო
number=int(input("enter a number"))
count=0
sum=0
while number !=-1:
    count +=1
    sum +=number
    number=int(input("enter a number"))
print(sum / number)