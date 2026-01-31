#https://www.codewars.com/kata/528d36d7cc451cd7e4000339/train/python (Class გაიხსენეთ და გააკეთეთ მხოლოდ პითონით, ჯერ გაგვივლია js-ში, გადახედეთ Level 60-ს)
def most_money(students):
    total = []
    for student in students:
        total.append((student.fives * 5) + (student.tens * 10) + (student.twenties * 20))
    
    if min(total) == max(total) and len(students) > 1:
        return "all"
    else:
        return students[total.index(max(total))].name