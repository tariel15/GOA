#9) შექმენით ფუნქცია, რომელიც იღებს 'args'-ით რიცხვებს და აბრუნებს მათ მაქსიმუმს და მინიმუმს
def find_min_max(*args):
    return min(args), max(args)
print(find_min_max(1,7,5,8,9))