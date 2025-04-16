#7) მომხმარებელს შემოაყვანინეთ წინადადება, შემდეგ for ციკლისა და პირობითი განცხადებების საშვალებით დაბეჭდეთ ჯერ ხმოვნების, შემდეგ კი თანხმოვნების რაოდენობა (ხმოვნებად ჩათვალეთ სიმბოლოები: a, e, i, o, u ხოლო სხვა ყველა თანხმოვნად)
word=input("enter a word")
numbers="aeiou"
count=0
count1=0
for i in word:
    if i in numbers: 
        count +=1 
    else:
        count1 +=1
print(count)
print(count1)