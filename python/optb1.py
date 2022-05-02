# DONE... O(n)
def second_largest(array):
    largest = array[0]
    secondLargest = array[0]
    for i in range(0, len(array)):
        if array[i]>largest: 
            largest = array[i]
        if array[i]<largest and array[i]>secondLargest: 
            secondLargest = array[i]
        # else: secondLargest = array[i]
        if i>0:
            if array[i-1] > secondLargest and array[i-1]<largest: secondLargest = array[i-1]
   
    for i in range(0, len(array)):
        if array[i]>largest: 
            largest = array[i]
        if array[i]<largest and array[i]>secondLargest: 
            secondLargest = array[i]
        if i>0:
            if array[i-1] > secondLargest and array[i-1]<largest: secondLargest = array[i-1]
        
    return {"first": largest, "second": secondLargest}

largest = second_largest([2,4,17,13,9,11,20,16,10,14,18])
print(largest)