#https://www.codewars.com/kata/52fba2a9adcd10b34300094c/train/python
def transpose(matrix):
    counter = 0
    listt = []
    answer_list = []
    while counter != len(matrix[0]):
        for i in matrix:
            for j in range(counter,counter+1):
                listt.append(i[j])
        answer_list.append(listt)
        listt=[]
        counter +=1
    return answer_list
