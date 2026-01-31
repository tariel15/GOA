#7) დაწერეთ ფუნქცია tuple_info, რომელიც მიიღებს tuple-ს და დაბეჭდავს მის სიგრძეს, პირველ და ბოლო ელემენტს
def tuple_info(tuple):
    return len(tuple), tuple[0], tuple[-1]