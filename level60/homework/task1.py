#2) შექმენით Student კლასი, რომელსაც ექნება protected ატრიბუტი _grade და private ატრიბუტი __id. დაამატეთ კლასის მეთოდი, რომელიც დაითვლის რამდენი სტუდენტი შეიქმნა ამ კლასიდან. კომენტარებით განმარტეთ protected და private ატრიბუტების დანიშნულება
class Student:
    student_count = 0  

    def __init__(self, grade, student_id):
        self._grade = grade  
        self.__id = student_id  
        Student.student_count += 1  
    @classmethod
    def get_student_count(cls):
        return cls.student_count

s1 = Student(90, 1)
s2 = Student(85, 2)
s3 = Student(75, 3)

print("სტუდენტების რაოდენობა:", Student.get_student_count())
#კლასის ატრიბუტი გამოიყენება ობიექტების საერთოდ გამოსაყენებლად
        #privet მხოლოდ კლასის შიგნით გამოიყენება
        #class method მეთოდი რომლის მუშაობას კლასზე და არა კონკრეტულ ობიექტზე