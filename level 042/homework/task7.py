#8) დაწერეთ ფუნქცია, რომელიც იღებს ლექსიკონს და ამატებს ახალ წყვილს ('age': 14) .update() მეთოდით, შემდეგ კი შლის ბოლო ელემენტს .popitem() მეთოდით. დაბეჭდეთ შედეგი და დაუმატეთ კომენტარები
students={
    "hobby": "hunting",
    "height": 173,
    "age": 15,
    "weight": 62.2
}
students.update({"age": 14})
students.popitem()
print(students)