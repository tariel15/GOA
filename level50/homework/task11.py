#11) რიცხვების სიაზე "nums = [1, 2, 3, 4, 5, 6]" გამოიყენეთ 'filter' და 'map' ერთად 'lambda'-თან, რათა გაფილტრდეს ლუწები და შემდეგ ყველა ლუწი გაიზარდოს 10-ით
nums = [1, 2, 3, 4, 5, 6]
nums1=filter(lambda a:a%2==0, list(map(lambda a : a +10 ,nums)))
print(list(nums1))