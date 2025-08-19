#2) შექმენით ფუნქცია greet_people რომელსაც ექენბა 3 არგუემნტის ცვლადი, special, *guests, **visitors. თქვენი ფანტაზიით მიესალმეთ თითეულს განსხვავებულად. ახსენით რა არის *args და **kwargs
def greet_people(special, *guests, **visitors):
    print(f"hello{special}! you are special guest")
    for guest in guests:
        print(f"hello{guests}! happy you are here ")
    for visitors in visitors.items():
        print(f"hello{visitors}")