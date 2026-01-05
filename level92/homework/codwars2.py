#3) მოიძიეთ ინფორმაცია quick sort (სწრაფი სორტირება) და merge sort ალგორითმებზე, დაწერეთ ამ ალგორითმების კოდი თქვენი, მოახდინეთ კოდის დებაგირება  და დაწერეთ კომენტარებით თუ როგორ მუშაობს
def quick_sort(arr):
    # თუ მასივში 0 ან 1 ელემენტია — უკვე დალაგებულია
    if len(arr) <= 1:
        return arr

    pivot = arr[0]   # pivot ელემენტი (ავირჩიეთ პირველი)
    left = []        # pivot-ზე პატარა ელემენტები
    right = []       # pivot-ზე დიდი ან ტოლი ელემენტები

    for i in range(1, len(arr)):
        if arr[i] < pivot:
            left.append(arr[i])
        else:
            right.append(arr[i])

    # რეკურსიულად ვალაგებთ მარცხენა და მარჯვენა ნაწილებს
    return quick_sort(left) + [pivot] + quick_sort(right)

numbers = [7, 3, 9, 2, 5]
print(quick_sort(numbers))
