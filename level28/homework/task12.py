#13) შექმენით სტრინგი და შემოიტანეთ საძიებელი სიტყვა input-ით. თუ სიტყვა მოიძებნება find-ით, დაბეჭდეთ პოზიცია, სხვა შემთხვევაში კი დაბეჭდეთ word not found
good="nike"
like=good.find(input("enetre a lether"))
if like !=-1:
    print(like)
else: print("word not found")