#7) სცადეთ რიცხვი გაყვოთ ნულზე, გამოიყენეთ "try" და "except" რათა თავიდან აიცილოთ შეცდომა და დაბეჭდოთ „ნულზე გაყოფა არ შეიძლება“
try:
    a = float(input("შეიყვანე რიცხვი "))
    result = 10 / 0
    print(result)
except ZeroDivisionError:
    print("ნულზე გაყოფა არ შეიძლება")