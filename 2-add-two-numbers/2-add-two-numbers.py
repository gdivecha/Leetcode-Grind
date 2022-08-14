# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def addTwoNumbers(self, l1, l2):
        carryOver = 0
        node = ListNode()
        temp = node
        temp2 = node
        while(l1!=None and l2!=None):
            currentTotal = carryOver+l1.val+l2.val
            newVal = currentTotal%10
            carryOver = currentTotal//10
            node.val = newVal
            node.next = ListNode()
            node = node.next
            if(l1.next==None and l2.next==None):
                node.val = carryOver
            l1 = l1.next
            l2 = l2.next 
        if(l1==None and l2!=None):
            while(l2!=None):
                currentTotal = carryOver+l2.val
                newVal = currentTotal%10
                carryOver = currentTotal//10
                node.val = newVal
                node.next = ListNode()
                node = node.next
                if(l2.next==None):
                    node.val = carryOver
                l2 = l2.next 
        elif(l2==None and l1!=None):
            while(l1!=None):
                currentTotal = carryOver+l1.val
                newVal = currentTotal%10
                carryOver = currentTotal//10
                node.val = newVal
                node.next = ListNode()
                node = node.next
                if(l1.next==None):
                    node.val = carryOver
                l1 = l1.next
        while(temp.next.next!=None):
            temp = temp.next
        if(temp.next.val==0):
            temp.next = None
        return temp2