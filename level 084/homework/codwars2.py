#https://www.codewars.com/kata/590adadea658017d90000039/train/python
SCORES = {'Wild': 10, 'Star': 9, 'Bell': 8, 'Shell': 7, 'Seven': 6,
          'Cherry': 5, 'Bar': 4, 'King': 3, 'Queen': 2, 'Jack': 1 }

def fruit(reels, spins):
    result = sorted( reels[i][spins[i]] for i in range(3) )
    
    if len(set(result)) == 1:
        return SCORES[result[0]] * 10
    
    elif len(set(result)) == 2:
        return SCORES[result[1]] * ((result[1] != result[2] == 'Wild') + 1)
    
    else:
        return 0