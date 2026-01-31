#4) შექმენით ფუნქცია სახელად caesar_cipher რომელიც მიიღებს ტექსტს და რიცხვს shift, ფუნქციამ უნდა გადაადგილოს მხოლოდ ანბანის ასოები ASCII კოდების მიხედვით. მაგ: "abc", 2 -> "cde". სხვა სიმბოლოები უცვლელი უნდა დარჩეს, გამოიყენეთ ord() და chr() და კომენტარებით ახსენით ალგორითმი
def caesar_cipher(text, shift):
    result = ""

    for char in text:
        ascii_code = ord(char)
        if 97 <= ascii_code <= 122:
            new_code = ascii_code + shift
            if new_code > 122:
                new_code = 96 + (new_code - 122)

            result += chr(new_code)
        elif 65 <= ascii_code <= 90:
            new_code = ascii_code + shift
            if new_code > 90:
                new_code = 64 + (new_code - 90)

            result += chr(new_code)
        else:
            result += char

    return result
print(caesar_cipher("abc", 2))
print(caesar_cipher("Hello, World!", 3))
