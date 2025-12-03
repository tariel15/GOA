#https://www.codewars.com/kata/52fba2a9adcd10b34300094c/train/python
import numpy as np


def transpose(matrix):
    return np.transpose(np.matrix(matrix)).tolist()