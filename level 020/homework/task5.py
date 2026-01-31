#4) შექმენით პროგრამა რომელშიც მომხმარებელმა უნდა შეიყვანოს რიცხვები, სანამ უარყოფითს არ შეიყვანს. დაბეჭდეთ შეყვანილი ლუწი და კენტი რიცხვების რაოდენობა გამოიყენეთ პირობითი განცხადებები
number=int(input("enter a number"))
count=0
count1=0
while number >=0:
    number=int(input("enter a number"))
    if number %2==0:
        count +=1
    else:
        count1 +=1
print("print even",count)
print("print odd",count1)