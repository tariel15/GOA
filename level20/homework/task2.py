#5) მომხმარებელს 3 მცდელობა აქვს სწორი PIN კოდის შეყვანისთვის. თუ შეიყვანს სწორად, დაიბეჭდება "Access Granted", სხვა შემთხვევაში "Access Denied" გამოიყენეთ პირობითი განცხადებები

enter_pin_code=input("enter pin code")
pin_code="2009"
atempt=0
# while enter_pin_code !=pin_code:
#     if enter_pin_code ==pin_code:
#         break
#     enter_pin_code=input("enter pin code")
#     atempt +=1
#     if atempt ==2:
#         print("acces denied")
#         break
while atempt !=3:
    if enter_pin_code != pin_code:
        if atempt ==2:
            print("acess denied")
            break
        else:
            enter_pin_code=input("enter pin code")
            atempt +=1
    elif enter_pin_code ==pin_code:
        print("acess granted")
        atempt =3