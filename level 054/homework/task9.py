#10) დაწერეთ დეკორატორი, რომელიც ფუნქციის დაბრუნებულ ტექსტს გადააქცევს დიდ ასოებად
def upperCase(func):
    def decor():
        res = func()
        return res.upper()
    return decor()

def greet():
    userInp = input("Enter a sentence: ")
    return userInp

print(upperCase(greet))