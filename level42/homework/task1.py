#2) შექმენით set სახელად numbers, დაამატეთ მას ორი რიცხვი add() მეთოდით და წაშალეთ ორი ელემენტი remove() მეთოდით. შემდეგ შექმენით მეორე set სახელად even_numbers და გამოიყენეთ union(), intersection(), difference() ორივე set-ზე. დაუმატეთ კომენტარები, რას აკეთებს თითოეული მეთოდი
numbers={1,2,3,4,5,6}
numbers.add(7)
numbers.add(8)
numbers.remove(2)
numbers.remove(1)
even_numbers={1,2,3,4,5,6}
union=numbers.union(even_numbers)# აერთიანებს ორივე ელემენტს
intersection=numbers.intersection(even_numbers)#აჩვენებს მხოლოდ საერთო ელემენტებს
difference=numbers.difference(even_numbers)#აჩვენებს განსხვავებულ ელემენტებს 
print(union)
print(intersection)
print(difference)