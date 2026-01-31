#4) შექმენით ფუნქცია, რომელიც მიიღებს 'kwargs'-ით ადამიანის მონაცემებს (სახელი, ასაკი) და დაბეჭდავს "სახელი: X, ასაკი: Y"
def num(**kwarg):
    for k,value in kwarg.items():
        print(f"name: {k }, age: {value}" )
num(name="tariel", age=str(15))