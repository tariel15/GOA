#https://www.codewars.com/kata/597a660f59873cc353000061/train/python (RGB 3)
def resolve_hex(hex):
    r, g, b = hex[0:2], hex[2:4], hex[4:]
    if r < g > b:
        return "Green"
    elif g < r > b:
        return "Red"
    else:
        return "Blue"


def rank_colors(colors):
    return sorted(list(set(colors)), key=colors.count, reverse=True)


def get_colors(col_arr):
    ranked_colors = ('+'.join(rank_colors([resolve_hex(hex)
                                           for hex in hex_list]))
                     for hex_list in col_arr)
    return ','.join(ranked_colors)