'''
    # C = output array [length = n]
    # A = 1st sorted array [length = n/2]
    # B = 2nd sorted array [length = n/2]
    
# Note So I can do binary search.
# Check if value>Array[0] or Array[len(Array)-1]
# if not, check if len(Array)/2 = value
else do the below
Recursively do len(Array)/2 which gets the 
midpoint of the array and check if
it is greater than or less than the value being searched.
................................................
...............................................
Could the above be that fast and efficient?
Whats the time complexity or runtime of this algorithm? 
turns out its still that of binary search
which is O(logn)
'''

C: list = []
print("Sith to the cls")
i,j=1,1
def merge_sort(array):
    n = len(array)
    global C,i,j
    

def binary_search(array: list, value: int):
    length: int = len(array)
    midpoint: int = length/2
    midpoint_value = array[midpoint]
    for i in array:
        if(value>midpoint):
            # search on the right
            d = 2