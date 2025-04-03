corect_pin="tariel"
user_pin=""
attempts=0
while user_pin != corect_pin:
    user_pin=input("enter pin cod:")
    attempts+=1
    if user_pin != corect_pin:
        print("wrong pin")
        if user_pin == corect_pin:
            print("ავტორიზაცია წარმატებით გაიარა")
