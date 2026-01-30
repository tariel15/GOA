#2) შექმენით პროგრამა, რომელიც:
#•    კლავიატურიდან მიიღებს ტექსტს (მინიმუმ 4 სიტყვა)
#•    შეინახავს ამ ტექსტს words.txt ფაილში
#•    წაიკითხავს ფაილს და შეასრულებს შემდეგ ოპერაციებს:
#დათვლის თანხმოვანი ასოების რაოდენობას
#იპოვის ყველაზე მოკლე სიტყვას
#გადაიყვანს ყველა დიდ ასოს პატარა ასოში და პირიქით (swap case)
#•    დამუშავებული ტექსტი შეინახოს processed.txt ფაილში
#•    კონსოლში გამოიტანოს: სიტყვების რაოდენობა, თანხმოვნები და ყველაზე მოკლე სიტყვა
# კლავიატურიდან ტექსტის მიღება
text = input("შეიყვანეთ ტექსტი (მინიმუმ 4 სიტყვა): ")

# სიტყვებად დაყოფა
words = text.split()

# მინიმუმ 4 სიტყვის შემოწმება
if len(words) < 4:
    print("შეცდომა: ტექსტი უნდა შეიცავდეს მინიმუმ 4 სიტყვას")
else:
    # ტექსტის ჩაწერა words.txt ფაილში
    with open("words.txt", "w", encoding="utf-8") as file:
        file.write(text)

    # ფაილიდან წაკითხვა
    with open("words.txt", "r", encoding="utf-8") as file:
        content = file.read()

    # თანხმოვანი ასოების დათვლა
    vowels = "აეიოუAEIOU"
    consonants_count = 0
    for char in content:
        if char.isalpha() and char not in vowels:
            consonants_count += 1

    # ყველაზე მოკლე სიტყვის პოვნა
    words_from_file = content.split()
    shortest_word = min(words_from_file, key=len)

    # swap case (დიდი ↔ პატარა ასოები)
    swapped_text = content.swapcase()

    # დამუშავებული ტექსტის შენახვა processed.txt ფაილში
    with open("processed.txt", "w", encoding="utf-8") as file:
        file.write(swapped_text)

    # კონსოლში შედეგების გამოტანა
    print("სიტყვების რაოდენობა:", len(words_from_file))
    print("თანხმოვანი ასოების რაოდენობა:", consonants_count)
    print("ყველაზე მოკლე სიტყვა:", shortest_word)
