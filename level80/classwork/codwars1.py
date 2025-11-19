#https://www.codewars.com/kata/520d9c27e9940532eb00018e/train/javascript
function solution() {
    for (var map = new Map(), i = arguments.length; i--;) {
    if (map.has(arguments[i])) return true
    map.set(arguments[i], 1)
    }
    return false
}
#https://www.codewars.com/kata/528d36d7cc451cd7e4000339/train/python
def most_money(students):
    total = []
    for student in students:
        total.append((student.fives * 5) + (student.tens * 10) + (student.twenties * 20))
    
    if min(total) == max(total) and len(students) > 1:
        return "all"
    else:
        return students[total.index(max(total))].name