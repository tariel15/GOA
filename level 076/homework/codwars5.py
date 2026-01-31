#https://www.codewars.com/kata/5297bf69649be865e6000922/train/python
def make_sentences(parts):
    ans = ""
    for x in parts:
        if x == ",":
            ans += ","
        elif x == ".":
            pass
        else:
            ans += " " + x
    ans += "."
    return ans.strip()