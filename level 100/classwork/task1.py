#1) შექმენით ბანკომატის სიმულაცია შემდეგი ფუნქციონალით:
#•    საწყისი ბალანსი: 1000 ლარი
#•    მთავარი მენიუ (while ციკლით):
#ბალანსის შემოწმება
#თანხის შეტანა
#თანხის გატანა
#ბოლო 5 ტრანზაქციის ნახვა
#გასვლა
#•    ყოველ ოპერაციაზე:
#იყენებს try-except ბლოკს:
#ValueError - არასწორი რიცხვის შეტანა
#არასწორი მენიუს არჩევანი
#თანხის გატანისას ამოწმებს საკმარისი ბალანსის არსებობას
#შეტანისას და გატანისას ამოწმებს დადებითი რიცხვის შეყვანას
#•    ინახავს ტრანზაქციების ისტორიას სიაში: [{'type': 'შეტანა/გატანა', 'amount': თანხა, 'balance': ახალი_ბალანსი}, ...]
#•    აჩვენებს ბოლო 5 ტრანზაქციას ფორმატირებული სახით
#•    გასვლისას აჩვენებს საბოლოო ბალანსს და ტრანზაქციების რაოდენობას
# საწყისი მონაცემები
# საწყისი მონაცემები
balance = 1000
transactions = []

def show_menu():
    print("\n--- ბანკომატის მენიუ ---")
    print("1. ბალანსის შემოწმება")
    print("2. თანხის შეტანა")
    print("3. თანხის გატანა")
    print("4. ბოლო 5 ტრანზაქციის ნახვა")
    print("5. გასვლა")

while True:
    show_menu()

    try:
        choice = int(input("აირჩიეთ ოპერაცია (1-5): "))

        if choice == 1:
            print(f"თქვენი ბალანსია: {balance} ლარი")

        elif choice == 2:
            amount = float(input("შეიყვანეთ შესატანი თანხა: "))
            if amount <= 0:
                raise ValueError("თანხა უნდა იყოს დადებითი")

            balance += amount
            transactions.append({
                "type": "შეტანა",
                "amount": amount,
                "balance": balance
            })
            print(f"შეტანა წარმატებულია. ახალი ბალანსი: {balance} ლარი")

        elif choice == 3:
            amount = float(input("შეიყვანეთ გასატანი თანხა: "))
            if amount <= 0:
                raise ValueError("თანხა უნდა იყოს დადებითი")
            if amount > balance:
                print("არასაკმარისი ბალანსი!")
            else:
                balance -= amount
                transactions.append({
                    "type": "გატანა",
                    "amount": amount,
                    "balance": balance
                })
                print(f"გატანა წარმატებულია. ახალი ბალანსი: {balance} ლარი")

        elif choice == 4:
            print("\n--- ბოლო 5 ტრანზაქცია ---")
            last_transactions = transactions[-5:]
            if not last_transactions:
                print("ტრანზაქციები არ არის.")
            else:
                for i, t in enumerate(last_transactions, start=1):
                    print(
                        f"{i}. ტიპი: {t['type']}, "
                        f"თანხა: {t['amount']} ლარი, "
                        f"ბალანსი: {t['balance']} ლარი"
                    )

        elif choice == 5:
            print("\nგამოსვლა სისტემიდან...")
            print(f"საბოლოო ბალანსი: {balance} ლარი")
            print(f"ტრანზაქციების რაოდენობა: {len(transactions)}")
            break

        else:
            print("არასწორი მენიუს არჩევანი!")

    except ValueError:
        print("შეცდომა: შეიყვანეთ სწორი რიცხვითი მნიშვნელობა!")
