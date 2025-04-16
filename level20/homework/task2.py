#5) მომხმარებელს 3 მცდელობა აქვს სწორი PIN კოდის შეყვანისთვის. თუ შეიყვანს სწორად, დაიბეჭდება "Access Granted", სხვა შემთხვევაში "Access Denied" გამოიყენეთ პირობითი განცხადებები

enter_pin_code=""
pin_code="2009"
atempt=0
while enter_pin_code!=pin_code:
    enter_pin_code=input("enter pin code")
    atempt+=3
    if enter_pin_code !=pin_code:
        print("acces denied")
else:print("access greanted")
