import math


def add(number1: int, number2: int):
    return f'hasil : {number1 + number2}'


def reduction(number1: int, number2: int):
    return f'hasil : {number1 - number2}'


def power(number1: int, number2: int):
    return f'hasil : {number1 ** number2}'


def multiply(number1: int, number2: int):
    return f'hasil : {number1 * number2}'


def divide(number1: int, number2: int):
    return f'hasil : {number1 / number2}'


def log(number: int):
    return f'hasil : {math.log(number)}'


def sqrt(number: int):
    return f'hasil : {math.sqrt(number)}'


def sin(number: int):
    return f'hasil : {math.sin(number)}'


def cos(number: int):
    return f'hasil : {math.cos(number)}'


def tan(number: int):
    return f'hasil : {math.tan(number)}'
