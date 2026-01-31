#2) შექმენით რიცხვების სია, შემდეგ ყოველი რიცხვი რომელიც კენტია გაამრავლეთ ორზე და დაამატეთ new_list-ში, ჯერ გააკეთეთ ეს დავალება ჩვეულებრივად, შემდეგ კი list comperhensiosns გამოყენებით. ასევე გააკეთეთ კიდევ 2 მაგალითი თქვენით, პირველ მაგალითში აიღეთ მხოლოდ გამოსახულების დამატება list comperhensions-ში, მეორე მაგალითში კი აიღეთ მხოლოდ პირობა
list1=[1,2,3,4,5,6,7,8,9,10]
new_list=[]
for i in list1:
    if i %2==0:
        new_list.append(i*2)
    print(new_list)

list2=[1,2,3,4,5,6,7,8,9,10]
new_list2=[x+5 for x in list2]
print(new_list2)

list3=[1,2,3,4,5,6,7,8,9,10]
new_list3=[x for x in list3 if x %2== 0]
print(new_list3)