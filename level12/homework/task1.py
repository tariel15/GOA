#2) გააკეთეთ 5-5 მაგალითი თთოეულ შედარების ოპერატორზე (>, >=, <, <=, ==, !=), გვერდზე კომენტარის საშვალებით მიუთითეთ თუ რომელ boolean მნიშვნელობას გამოიტანას, აიღეთ მრავალფეროვანი კომბინაციები, შეეცადეთ გქონდეთ ყველა ვარიანტი
print(15!=50)#true
print(100!=10)#true
print(105!=200)#true
print(20!=50)#true
print(15!=100)#true

print(10==15)#fales
print(10==10)#true
print(15==50)#fales
print(50==100)#fales
print(25==75)#fales

print(100<=50)#fales
print(10<=20)#true
print(55<=55)#true
print(15<=50)#true
print(10<=100)#true

print(20>=50)#fales
print(30>=15)#true
print(100>=50)#true
print(10>=60)#fales
print(100>=200)#fales

print(15>50)#fales
print(32>62)#fales
print(30>15)#true
print(15>1)#true
print(50>1)#true

print(15<50)#true
print(30<15)#fales
print(55<50)#fales
print(2<3)#true
print(19<20)#true