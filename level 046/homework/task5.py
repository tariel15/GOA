#6) სიიდან "animals = ['tiger', 'lion', 'zebra', 'elephant', 'giraffe']" შექმენით ახალი სია, რომელიც შეიცავს სიტყვების პირველ ასოებს, ჯერ "for"-ით, შემდეგ list comprehension-ით. შემდეგ აირჩიეთ მხოლოდ ის სიტყვები, რომლებიც "e"-ზე იწყება
animals = ['tiger', 'lion', 'zebra', 'elephant', 'giraffe']
new_animals = [animal for animal in animals if animal.startswith('e')]
print(new_animals) 