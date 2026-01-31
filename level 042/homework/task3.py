#4) შექმენით dictionary სახელად student, დაამატეთ მას მონაცემები: name, hobby, height, weight. შემდეგ გამოიყენეთ .get() მეთოდი name-ის მისაღებად და .pop() მეთოდი height-ის წასაშლელად. დაუმატეთ კომენტარები, რას აკეთებს თითოეული 
student={
    "name": "tariel",
    "hobby": "hunting",
    "height": 170,
    "weight": 62
}

print(student.get("name"))
student.pop("height")
print(student)