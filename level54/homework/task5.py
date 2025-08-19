#6) დაწერეთ დეკორატორი, რომელიც ფუნქციის გაშვების წინ დაბეჭდავს "ფუნქცია დაიწყო" და დასრულების შემდეგ "ფუნქცია დასრულდა"
def myFunc(func):
    def decor():
        print("Function Start")
        func()
        print("Function End")
    res = decor()
    return res

def greet():
    print("Hello world!")


myFunc(greet)