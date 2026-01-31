#3) განხილულ მეთოდებზე: split, join, replace, strip მოიყვანეთ 2-2 მაგალითი. თითოეულს მიუწერეთ კომენტარებით ახსნა თუ როგორ მუშაობს

#split
text="grape apple orange"
print(text.split())

words="a d f g"
print(words.split())

#join
good="nice","night"
print("".join(good))

nice="a","r"
print("-".join(nice))

#replace
night="i like apple"
print(night.replace("apple","orange"))

king="i hate you"
print(king.replace("you","school"))

#strip
so="iiiiid"
print(so.strip("i"))

dd="???e??"
print(dd.strip("?"))