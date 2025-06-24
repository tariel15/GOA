#2) შექმენით manual_max ფუნქცია რომელსაც პარამეტრად გადაეცემა სია და აბრუნებს ყველაზე დიდ მნიშვნელობას. ასევე შექმენით manual_len ფუნქცია რომელიც თვლის გადაცემული მიმდევრობის სიგრძეს
def manual_max(iiid):
    largest=iiid[0]
    for number in iiid:
        if number > largest:
            largest = number
        return number
    
def manual_len(sequence):
    withe=0
    for char in sequence:
        withe +=1
    return withe