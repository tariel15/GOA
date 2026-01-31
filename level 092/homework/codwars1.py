#2) debugging მოახდინეთ ჩვენ მიერ გაკვეთილზე განხილული insertion_sort (ჩასმის ხერხით სორიტების) ალგორითმის და ახსენით როგორ მუშაობს კომენტარებით
def insertion_sort(arr):
    # ვიწყებთ მეორე ელემენტიდან,
    # რადგან ვთვლით, რომ პირველი ელემენტი უკვე დალაგებულია
    for i in range(1, len(arr)):
        current = arr[i]
        j = i - 1

        # ვამოწმებთ მარცხენა მხარეს არსებულ ელემენტებს
        # და ვწევთ მათ მარჯვნივ, სანამ current-ზე დიდები არიან
        while j >= 0 and arr[j] > current:
            arr[j + 1] = arr[j]
            j -= 1

        # ვსვამთ current ელემენტს მის სწორ ადგილას
        arr[j + 1] = current

    return arr
numbers = [8, 3, 5, 2, 9]
print(insertion_sort(numbers))
