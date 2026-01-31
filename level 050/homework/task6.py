#7) სიტყვების სიაზე "words = ['hello', 'world', 'python']" გამოიყენეთ 'map', რათა ყველა სიტყვა გადაიქცეს დიდ ასოებად
words = ['hello', 'world', 'python']
words1 = map(lambda a: a.upper() ,words)
print(list(words1))