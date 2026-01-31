#3) შექმენით ფუნქცია, რომელიც მიიღებს ნებისმიერ რაოდენობის სტრინგებს 'args'-ით და დააბრუნებს ყველა სტრინგი გაერთიანებულად
def concat_strings(*args):
    return "".join(args)

print(concat_strings("tariel","davit","rezi"))