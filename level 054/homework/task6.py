#7) დაწერეთ დეკორატორი, რომელიც ფუნქციის გაშვების დროს დაითვლის რამდენი წამი მუშაობდა ფუნქცია
import time
import math

def timer(func):
    print("Execution start")
    def decorator():
        start = time.time()
        func()
        end = time.time()
        print(f"function was working {-math.floor((start - end))} seconds")
    return decorator()

def myFunc():
    time.sleep(1)

timer(myFunc)
