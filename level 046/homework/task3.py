#4) რიცხვების სიიდან "nums = list(range(1, 21))" შექმენით ახალი სია კვადრატებით, ჯერ "for"-ით, შემდეგ list comprehension-ით. შემდეგ სცადეთ მსგავსი მაგალითი სხვა მოქმედებით
nums = list(range(1, 21))
squares = []

for num in nums:
    squares.append(num ** 2)

print(squares)

nums2 = list(range(50,98))
squares1=[]
for num in nums2:
    squares1.append(num **2)
print(squares1)