#4) შექმენით რიცხვების გამოცნობის თამაში შემდეგი ფუნქციონალით:
#•    პროგრამა Math მოდულის გამოყენებით (ან random მოდული) გენერირებს შემთხვევით მთელ რიცხვს 1-დან 100-მდე
#•    მომხმარებელს ეძლევა მაქსიმუმ 7 მცდელობა რიცხვის გამოსაცნობად
#•    ყოველ მცდელობაზე:
#იყენებს try-except ბლოკს არასწორი შეტანის დასამუშავებლად
#აძლევს მინიშნებას: "ძალიან დიდია" ან "ძალიან პატარაა"
#ითვლის დარჩენილ მცდელობებს
#•    თამაშის დასრულებისას:
#თუ გამოიცნო - გამოაქვს გილოცავთ და მცდელობების რაოდენობა
#თუ არ გამოიცნო - გამოაქვს სწორი რიცხვი
#სთავაზობს ხელახლა თამაშის დაწყებას (y/n)
#•    ინახავს სტატისტიკას tuple-ში: (თამაშების რაოდენობა, მოგებების რაოდენობა, საშუალო მცდელობები)
import random

#    სტატისტიკა
games_played = 0
wins = 0
total_attempts = 0

while True:
    secret_number = random.randint(1, 100)
    max_attempts = 7
    attempts = 0
    guessed = False

    games_played += 1

    print("\ ჩავიფიქრეთ რიცხვი 1-დან 100-მდე.")
    print("თქვენ გაქვთ 7 მცდელობა მის გამოსაცნობად.")

    while attempts < max_attempts:
        try:
            guess = int(input("შეიყვანეთ თქვენი ვარაუდი: "))
        except ValueError:
            print("გთხოვთ შეიყვანოთ მთელი რიცხვი!")
            continue

        attempts += 1
        remaining = max_attempts - attempts

        if guess > secret_number:
            print("ძალიან დიდია")
        elif guess < secret_number:
            print("ძალიან პატარაა")
        else:
            print(f"გილოცავთ! თქვენ გამოიცანით რიცხვი {attempts} მცდელობაში.")
            guessed = True
            wins += 1
            total_attempts += attempts
            break

        print(f"დარჩენილი მცდელობები: {remaining}")

    if not guessed:
        print(f"სამწუხაროდ ვერ გამოიცანით. სწორი რიცხვი იყო: {secret_number}")
        total_attempts += max_attempts

    # თამაშის გაგრძელების შეთავაზება
    again = input("გსურთ ხელახლა თამაში? (y/n): ").lower()
    if again != "y":
        break

#     საშუალო მცდელობების გამოთვლა
average_attempts = total_attempts / games_played if games_played > 0 else 0

#     სტატისტიკის შენახვა tuple-ში
stats = (games_played, wins, round(average_attempts, 2))

print("\nთამაშის სტატისტიკა")
print("----------------------")
print("თამაშების რაოდენობა:", stats[0])
print("მოგებების რაოდენობა:", stats[1])
print("საშუალო მცდელობები:", stats[2])
