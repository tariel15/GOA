#https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/python
def basic_op(operator, value1, value2):
    match operator:
        case '+':
            return value1 + value2
        case '-':
            return value1 - value2
        case '*':
            return value1 * value2
        case '/':
            return value1 / value2
    