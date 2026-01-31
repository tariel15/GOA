#https://www.codewars.com/kata/59f70440bee845599c000085/train/python
scores = {"A": 30, "B": 20, "C": 10, "D": 5}

def find_hack(arr):
    return [name for name, score, grades in arr if scoring(grades) != score]

def scoring(grades):
    score = sum(scores.get(grade, 0) for grade in grades)
    bonus = 20 if set(grades) <= {"A", "B"} and len(grades) > 4 else 0
    return min(score + bonus, 200)