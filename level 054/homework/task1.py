#2) შექმენით ფუნქცია, რომელიც მიიღებს ნებისმიერ რაოდენობის რიცხვებს 'args'-ით და დააბრუნებს მათ ჯამს
def num(*args):
    sum=0
    for i in args :
        sum += i 
    return sum

print(num(1,2,4,5))