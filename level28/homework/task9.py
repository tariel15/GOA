#10) მოცემული სიაა: ["georgia", "aRMENIA", "greeCE"]. ყველა ელემენტს ჯერ გაუკეთეთ lower, შემდეგ capitalize და დაბეჭდეთ
good=["georgia", "aRMENIA", "greeCE"]
for i in range(len(good)):
    good[i]=good[i].lower()
    good[i]=good[i].capitalize()
print(good)