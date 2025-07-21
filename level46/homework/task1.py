#2) რიცხვების სიიდან "numbers = [1, 4, 7, 10, 13, 16, 19]" აირჩიეთ მხოლოდ კენტები, გაამრავლეთ ორზე და დაამატეთ "new_list"-ში, ჯერ "for"-ით, შემდეგ list comprehension-ით. ბოლოს გააკეთეთ 2 მსგავსი მაგალითი: ერთში მხოლოდ მოქმედება გამოიყენეთ, მეორეში მხოლოდ პირობა
numbers = [1, 4, 7, 10, 13, 16, 19]
new_list=[]
for i in numbers:
    if i %3==0:
        new_list.append(i*2)
    print(new_list)

list2=[1,2,3,4,5,6,7,8,9,10]
new_list2=[x+5 for x in list2]
print(new_list2)

list3=[1,2,3,4,5,6,7,8,9,10]
new_list3=[x for x in list3 if x %3== 0]
print(new_list3)