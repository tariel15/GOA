#14) დაწერე ფუნქცია, რომელიც იღებს სტრიქონს და აბრუნებს მასში ხმოვნების (a, e, i, o, u) რაოდენობას. გამოიყენე ციკლი და if-else
def names(good):
    count=0
    for i in good:
        if i in "aeiou":
            count +=1
    return count
print(names("tariel"))
