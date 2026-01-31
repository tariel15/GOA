#5) შექმენით ფუნქცია, რომელიც მიიღებს 'kwargs'-ით მანქანის მონაცემებს და დაბეჭდავს თითოეულ გასაღებს და მნიშვნელობას
def sum(**kwargs):
    for k,value in kwargs.items():
        print(f"{k}: {value}")
sum(name = "Toyota ",model = "picap")