#https://www.codewars.com/kata/53af2b8861023f1d88000832/train/python
def areYouPlayingBanjo(name):
    if name[0].lower() == 'r':
        return name + ' plays banjo'
    else:
        return name + ' does not play banjo'