#```1) შექმენით რიცხვების set, ჩამოწერეთ მისი ყველა თვისება, შემდეგ დაამტეთ და წაშალეთ 2 ელემენტი: add და remove მეთოდების საშვალებით. შემდეგ შექემნით მეორე set და არსებულ 2 set-ს შორის შეასრულეთ სამივე მოქმედება: union, intersection, difference```
num1={1,4,56,6,67,44}
num1.add(12)
num1.add(25) #num1 დაემატა ელემენტი
num3={1,4,56,6,67,44,73,93}
union=num1.union(num3) # აერთიანებს ორივე ელემენტს
intersection=num1.intersection(num3) #აჩვენებს მხოლოდ საერთო ელემენტებს
defference=num1.difference(num3) #აჩვენებს განსხვავებულ ელემენტებს 
print(union)
print(intersection)
print(defference)