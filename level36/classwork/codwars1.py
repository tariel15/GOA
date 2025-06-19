#https://www.codewars.com/kata/56598d8076ee7a0759000087/train/python
def calculate_tip(amount, rating):
    if rating.lower() == "poor":
        return -(-amount *0.05//1)
    elif rating.lower() == "good":
        return -(-amount *0.10//1)
    elif rating.lower() == "great":
        return -(-amount *0.15//1)
    elif rating.lower() == "excellent":
        return -(-amount *0.20//1)
    elif rating.lower() =="terrible":
        return -(-amount *0.00/1)
    else:
        return "Rating not recognised"