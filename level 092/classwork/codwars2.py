#3) შექმენით სორტირების ალგორითმი თქვენი ხელით, (ჩასმის ხერხით სორტირება) კომენტარებით დაწერეთ თუ როგორ მუშაობს და როგორ შეგვიძლია ვმართოთ დალაგება ზრდადობით მოხდება თუ კლებადობით
def insertion_sort(arr, order="asc"):
    for i in range(1, len(arr)):
        current = arr[i]
        j = i - 1
        while j >= 0 and (
            arr[j] > current if order == "asc" else arr[j] < current
        ):
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = current

    return arr
