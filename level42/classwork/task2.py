#2) კომენტარებით რა არის dictionary, შემდეგ შექმენით 1 dictionary სახელად person რომელშიც გასაღებები იქნება: name, hobby, height, weight. გამოიყენეთ მეთოდები:
#dictionary არის მონაცემის სტრუქტრა რომელიც შეგვიძლია მონაცემსი შენახული იფორმაცია გამოვიძახოთ მონაცემის სახელით
person ={
    "name": "tariel",
    "hobby": "hunting",
    "height": 172,
    "weight": 62.2
}

person_copy=person.copy() #ქმნის ასლს 
print(person.get("name"))#აბრუნებს მნიშვნელობას მითითებულ გასაღებისთვის
print(person.items())
print(person.keys())# აბრუნებს ყველა გასაღებს
print(person.values()) #აბრუნებს ყველა მნიშვნელობას 
person.pop("hobby")
person.popitem()
person.update({"height":174}) # შლის და აბრუნებს ახალ მნიშვნელობას
person.clear() # ამატებს ან ანახლებს ელემენტს