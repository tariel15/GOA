#9) სიტყვების სიაზე "words = ['ant', 'elephant', 'dog', 'giraffe']" გამოიყენეთ 'filter', რათა დატოვოთ მხოლოდ ის სიტყვები, რომლების სიგრძეა მეტი ან ტოლია 5-ის
words = ['ant', 'elephant', 'dog', 'giraffe']
words1=filter(lambda a:len(a)>=5,words)
print(list(words1))