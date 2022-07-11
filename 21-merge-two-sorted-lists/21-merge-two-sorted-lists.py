# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def mergeTwoLists(self, list1, list2):
        head1 = list1
        head2 = list2
        count1 = 0
        count2 = 0
        isValid = 0
        while(head1!=None):
            count1+=1
            if((head1.val<-100)or(head1.val>100)):
                isValid+=1
                break
            if((head1.next!=None)and(head1.val>head1.next.val)):
                isValid+=1
                break
            head1 = head1.next
        while(head2!=None):
            count2+=1
            if((head2.val<-100)or(head2.val>100)):
                isValid+=1
                break
            if((head2.next!=None)and(head2.val>head2.next.val)):
                isValid+=1
                break
            head2 = head2.next
        if((isValid==0)and(count1<=50)and(count2<=50)):
            head1 = list1
            head2 = list2
            headOfNewArray = None
            if(count1==0):
                headOfNewArray = list2
                return headOfNewArray
            if(count2==0):
                headOfNewArray = list1
                return headOfNewArray
            if(head2.val<=head1.val):
                headOfNewArray = ListNode(head2.val,None)
                head2 = head2.next
            else:
                headOfNewArray = ListNode(head1.val,None)
                head1 = head1.next
            headOfNewToTraverse = headOfNewArray
            # print("head1 = "+str(head1.val))
            # print("head2 = "+str(head2.val))
            i = 0
            while(i<(count1+count2-1)):
                if(((head1!=None)and(head2!=None))and(head2.val<=head1.val)):
                    headOfNewToTraverse.next = ListNode(head2.val,None)
                    headOfNewToTraverse = headOfNewToTraverse.next
                    head2 = head2.next
                    i+=1
                elif(((head1!=None)and(head2!=None))and(head2.val>head1.val)):
                    headOfNewToTraverse.next = ListNode(head1.val,None)
                    headOfNewToTraverse = headOfNewToTraverse.next
                    head1 = head1.next
                    i+=1
                if(head1==None and head2==None):
                    break
                elif(head1==None):
                    headOfNewToTraverse.next = head2
                    break
                elif(head2==None):
                    headOfNewToTraverse.next = head1
                    break
            return headOfNewArray
                    
                
            
        