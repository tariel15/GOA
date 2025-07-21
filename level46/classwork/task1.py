#1) შექმენით student dictionary, რომელშიც გექნებათ მინიმუმ 4 ელემენტი. შემდეგ გამოიყენეთ მეთოდები ამ dictionary-ზე

#.update()
#.pop()
#ელემენტი შეცვალეთ
student = {
    'name': 'ana',
    'grades':'A',
    'class':'10',
    'gender': 'famail'
}
student.update({'gender':'male'})
student.pop('class')
student['name'] ='nika'
print(student)