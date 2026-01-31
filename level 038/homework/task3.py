#4) შექმენით სიები fruits, colors, numbers. თითოეულზე გამოიყენეთ index, count, sort, sorted, min, max მეთოდები & ფუნქციები და დააკომენტარეთ თითოეული მაგალითი (რას აკეთებს)
fruits = ["apple", "mango", "banana", "watermelon", "mango"]

colors = ["red", "blue", "green", "yellow"]

numbers = [-10, 1, 2, 3, 8, 9, 4, 5, 6, 7, 8, 9, 10, 10, 10, 15]

# .index() ფუნქცია იღებს ერთ არგუმენტს და გვიბრუნებს მის index-ს
print(fruits.index("mango"))


# .count() ფუნქცია იღებს ერთ არგუმენტს და გვიბრუნებს რამდენჯერ არის სიაში იგივე ელემენტი ჩაწერილი
print(fruits.count("mango"))
print(numbers.count(8))

# min() იღებს ერთ არგუმენტს ეს ჩვენს შემთხვევაში არის სია და გვიბრუნებს სიაში ყველაზე პატარა

print(min(numbers))

# max() ფუნქცია იღებს ერთ არგუმენტს ეს ჩვენს შემთვაში არის სია და გვიბრუნებს სიაში ყველაზე დიდ ელემენტს

print(max(numbers))

# .sort() ფუნქცია ალაგებს სიას ანბანის მიხედვით ჩვენ შეგვიძლია ანბანის მიხედვით დალაგებულია უკუმაც დავალაგოთ მაგ ასე: .sort(reverse=True)
print(fruits)

fruits.sort()

print(fruits)

# sorted() ფუნქცია იღებს ერთზე მეტ არგუმენტს და ალაგებს აბანის მიხედვით მუშაობს რიცხვებზეც და ალაგებს ზრდადობის მიხედვით ასევე შეგვიძლია ჩვენ მას გადავცერთ reverse=True და ის აბრუნებს შემოტრიალებულ სიას

print(colors)
print(sorted(colors))
print(numbers)
print(sorted(numbers))