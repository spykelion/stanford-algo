# max element in a unimodal array using O(logn)
# not done yet.....

# Binary Search in python


import math


def binarySearch(array, x, low, high):

    # Repeat until the pointers low and high meet each other
    while low <= high:

        mid = low + (high - low)//2

        if array[mid] == x:
            return mid

        elif array[mid] < x:
            low = mid + 1

        else:
            high = mid - 1

    return -1


def getMax(array: list):
    max = array[0]

    mid = math.floor(len(array)/2)

    for i in array:
        if i>max: max=i
    return max,array[mid]

array = [3, 4, 5, 6, 7, 8, 9]
unimodal_array = [3, 4, 5, 6, 7, 8, 9,8,5,3,1]
x = 7
'''
    max = (unimodal_array)/2
    if a[mid-1]>max, for
'''
result = binarySearch(array, x, 0, len(array)-1)

print(getMax(unimodal_array))

if result != -1:
    print("Element is present at index " + str(result))
else:
    print("Not found")