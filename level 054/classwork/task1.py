#1) შექმენით პროდუქტების dictionary. შემდეგ გაფილტრეთ ეს dictionary და დატოვეთ ის პროდუქტები რომელთა ფასი ნაკლებია 100-ზე. საბოლოოდ დაბეჭდეთ ეს dict
dictionery ={
    "apple" : 120,
    "banana" : 80,
    "grape" : 200
}
dictionery2 = dict(filter(lambda x: x[1] < 100, dictionery.items()))
print(dictionery2)