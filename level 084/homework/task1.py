#შექმენით python-ის პროგრამა/ვებ-გვერდი tic-tac-toe თამაშისთვის, python-ში (Tic Tac Toe) N1 ამოცანაში მოცემული სახით მოახდინეთ თამაშის ვიზუალიზაცია, ვებ-გვერდის შემთხვევაში კი div-ებით, ასევე შეგიძლიათ დაამატოთ AI-mode ხელოვნურ ინტელექტთან ბრძოლის რეჟიმი სხვასხვა დონეებით და ქულების დათვლის სისტემა. გვერდი უნდა იყოს რესპონსიული, ინსპირაციისთვის შეგიძლიათ გამოიყენოთ ეს კოდი
import random
import time
score = {"Player": 0, "AI": 0, "Draw": 0}
def print_board(board):
    print("\n")
    for i in range(3):
        row = " | ".join(board[i])
        print(" " + row)
        if i < 2:
            print("---+---+---")
    print("\n")
def check_win(board, player):
    win_states = [
        board[0], board[1], board[2],
        [board[0][0], board[1][0], board[2][0]],
        [board[0][1], board[1][1], board[2][1]],
        [board[0][2], board[1][2], board[2][2]],
        [board[0][0], board[1][1], board[2][2]],
        [board[0][2], board[1][1], board[2][0]],
    ]
    return [player, player, player] in win_states
def is_draw(board):
    return all(board[i][j] != " " for i in range(3) for j in range(3))
def minimax(board, depth, is_maximizing):
    if check_win(board, "O"):
        return 1
    if check_win(board, "X"):
        return -1
    if is_draw(board):
        return 0

    if is_maximizing:
        best_score = -999
        for i in range(3):
            for j in range(3):
                if board[i][j] == " ":
                    board[i][j] = "O"
                    score_val = minimax(board, depth + 1, False)
                    board[i][j] = " "
                    best_score = max(score_val, best_score)
        return best_score
    else:
        best_score = 999
        for i in range(3):
            for j in range(3):
                if board[i][j] == " ":
                    board[i][j] = "X"
                    score_val = minimax(board, depth + 1, True)
                    board[i][j] = " "
                    best_score = min(score_val, best_score)
        return best_score
def ai_move(board, difficulty):
    if difficulty == "easy":
        available = [(i,j) for i in range(3) for j in range(3) if board[i][j] == " "]
        return random.choice(available)
    if difficulty == "hard":
        best_score = -999
        move = None
        for i in range(3):
            for j in range(3):
                if board[i][j] == " ":
                    board[i][j] = "O"
                    score_val = minimax(board, 0, False)
                    board[i][j] = " "
                    if score_val > best_score:
                        best_score = score_val
                        move = (i, j)
        return move
def play_game():
    global score
    board = [[" "]*3 for _ in range(3)]

    print("აირჩიეთ რეჟიმი:")
    print("1) Player vs Player")
    print("2) Player vs AI")
    mode = input("→ ")

    difficulty = None
    if mode == "2":
        print("აირჩიეთ სირთულე:")
        print("1) Easy")
        print("2) Hard")
        diff = input("→ ")
        difficulty = "easy" if diff == "1" else "hard"

    turn = "X"

    while True:
        print_board(board)
        if mode == "1" or (mode == "2" and turn == "X"):
            print(f"Player {turn} შეიყვანეთ პოზიცია (1-9): ")
            pos = int(input("→ ")) - 1
            r, c = pos // 3, pos % 3
            if board[r][c] != " ":
                print("საფარი დაკავებულია!")
                continue
        else:
            print("AI ფიქრობს...")
            time.sleep(0.5)
            r, c = ai_move(board, difficulty)
            print(f"AI დადებს {r*3+c+1} პოზიციაზე")

        board[r][c] = turn

        if check_win(board, turn):
            print_board(board)
            if mode == "2" and turn == "O":
                print("AI მოიგო!")
                score["AI"] += 1
            elif mode == "2":
                print("Player მოიგო!")
                score["Player"] += 1
            else:
                print(f"მოთამაშე {turn} მოიგო!")
            break

        if is_draw(board):
            print_board(board)
            print(" ფრე!")
            score["Draw"] += 1
            break

        turn = "O" if turn == "X" else "X"

    print("ქულები:", score)

while True:
    play_game()
    again = input("გსურთ თავიდან თამაში?: ")
    if again.lower() != "y":
        break

print("თამაში დასრულდა!")
