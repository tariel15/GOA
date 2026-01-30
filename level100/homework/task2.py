#3) შექმენით პროგრამა სტუდენტების ქულების მართვისთვის:
#•    შექმენით dictionary სტრუქტურა სადაც:
#Key არის სტუდენტის სახელი
#Value არის მისი ქულების სია (მინიმუმ 5 საგნის ქულა)
#•    შექმენით ფუნქციები:
#calculate_average(scores) - ითვლის საშუალო ქულას
#get_grade(average) - აბრუნებს შეფასებას (A: 91-100, B: 81-90, C: 71-80, D: 61-70, E: 51-60, FX: 41-50, F: 0-40)
#find_top_student(students_dict) - პოულობს საუკეთესო სტუდენტს
#•    მინიმუმ 5 სტუდენტისთვის:
#გამოთვალეთ საშუალო ქულა
#განსაზღვრეთ შეფასება
#დაალაგეთ სტუდენტები საშუალო ქულის მიხედვით (კლებადობით)
#•    შედეგები გამოიტანეთ ფორმატირებული სახით
# სტუდენტების ქულების dictionary
students = {
    "ანა": [95, 88, 92, 90, 94],
    "გიორგი": [78, 85, 80, 82, 79],
    "ნინო": [88, 91, 90, 87, 89],
    "ლუკა": [65, 70, 68, 72, 69],
    "მარიამი": [55, 60, 58, 57, 59]
}

# საშუალო ქულის გამოთვლა
def calculate_average(scores):
    return sum(scores) / len(scores)

# შეფასების განსაზღვრა
def get_grade(average):
    if 91 <= average <= 100:
        return "A"
    elif 81 <= average <= 90:
        return "B"
    elif 71 <= average <= 80:
        return "C"
    elif 61 <= average <= 70:
        return "D"
    elif 51 <= average <= 60:
        return "E"
    elif 41 <= average <= 50:
        return "FX"
    else:
        return "F"

# საუკეთესო სტუდენტის პოვნა
def find_top_student(students_dict):
    top_student = None
    highest_average = 0

    for name, scores in students_dict.items():
        avg = calculate_average(scores)
        if avg > highest_average:
            highest_average = avg
            top_student = name

    return top_student, highest_average

# სტუდენტების დამუშავება
results = []

for name, scores in students.items():
    avg = calculate_average(scores)
    grade = get_grade(avg)
    results.append((name, avg, grade))

# დალაგება საშუალო ქულის მიხედვით (კლებადობით)
results.sort(key=lambda x: x[1], reverse=True)

# შედეგების გამოტანა
print("სტუდენტების შედეგები:")
print("-" * 40)
print(f"{'სახელი':<10} {'საშუალო':<10} {'შეფასება'}")
print("-" * 40)

for name, avg, grade in results:
    print(f"{name:<10} {avg:<10.2f} {grade}")

# საუკეთესო სტუდენტი
top_name, top_avg = find_top_student(students)
print("-" * 40)
print(f"საუკეთესო სტუდენტი: {top_name} ({top_avg:.2f})")
