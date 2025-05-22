#5) შექმენით ფუნქცია რომელიც მიიღებს x და y კორდინატს, შემდეგ კი გადაცემული კორდინატების ადგილას დახაზავს კვადრატს, დავალების შესასრულებლად გამოიყენეთ მოდული: from turtle import
from turtle import *

color ("red")
width(3)

def scuer(x,y):
    penup()
    goto(x,y)
    pendown()
    forward(200)
    left(90)
    forward(200)
    left(90)
    forward(200)
    left(90)
    forward(200)
    left(90)
scuer(100,-100)
exitonclick()