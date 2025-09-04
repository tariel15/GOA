#2) შექმენით კლასი Book, რომელსაც ექნება title, author, pages. დაამატეთ მეთოდი info(), რომელიც დაბეჭდავს "სათაური: X, ავტორი: Y, გვერდები: Z"
class book():
    def __init__(self,title,author,pages):
        self.title= title
        self.author= author
        self.pages= pages

    def info(self):
        print(f"სათაური: {self.author},ავტორი:{self.author},გვერდები:{self.pages} " )

book1=book("titanik","picaso",200)
book2=book("compute enginiring","GOA",300)

print(book2.title)
print(book2.author)
print(book2.pages)