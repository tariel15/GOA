#3) ჩამოწერეთ IndexError, NameError, SyntaxError, ZeroDivisionError გამოწვევის მიზეზები. ასევე ახსენით თქვენი სიტყვებით რა გასნხვავებაა Bug-ს და Error-ს შორის. ახსენით რა არის error handling და მისი თითოეული keyword: try, except, else, finally. შემდეგ მოიყვანეთ ერთი error handling მაგალითი რომელშიც იქნება ყველა error handling-ის keyword
#NameError ცვლადს ან ფუნქციას რომელსაც ვიყენებთ არ არსებობს იმ სახელით
#IndexError ისეთ ინდექს იყენებს რომელიც არ არსებობს
#SyntaxError წერითი შეცდომა
#ZeroDevisionError ნიშნავს ნულზე გაყოფას
#Bug არის პროგრამაში დაშვებული შეცდომა
#Error ნიშნავს რაიმე კონკრეტულ შეცდომას 
#try ვწერთ ისეთ კოდს სადაც შეიძლება ქონდეს შეცდომა
#expect ვწერთ რა მოხდება შეცდომის შემთხვევაში
#else მაშინ სრულდება როცა try_ში შეცდომა არ მოხდება
#finally ყოველთვის შესრულდება შეცდომის მიუხედავად

try:
    1=int(input("enter a number"))
    2=int(input("enter a devided"))
    print(1/2)
except ZeroDivisionError:
    print("cant devide with zero")
except ValueError:
    print("enter a number")
else:
    print("sucesfully bevided")
finally:
    print("finished")