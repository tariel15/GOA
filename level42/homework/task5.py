#6) შექმენით ლექსიკონი person და გამოიყენეთ .items() მეთოდი, რათა დაბეჭდოთ ყველა key და value წყვილად. გამოიყენეთ loop და კომენტარი დაუმატეთ შედეგს
person ={
    "name":"alika",
    "age":"30",
    "hight":"170"
}
for i in person.items():
    print(i[0])
    print(i[1])