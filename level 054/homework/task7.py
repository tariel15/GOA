#8) შექმენით ფუნქცია 'multiply', რომელიც იღებს რიცხვებს 'args'-ით და აბრუნებს მათ ნამრაველს
def multiply(*args):
    result = 1
    for num in args:
        result *= num
    return result
print(multiply(1,2,3,5))