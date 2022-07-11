/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode middleNode(ListNode head) {
        ListNode toReturn = head;
        ListNode current = head;
        int valid = 0;
        int count = 0;
        while(current!=null){
            count++;
            if((current.val<1)||(current.val>100)){
                valid++;
                break;
            }
            current = current.next;
        }
        if((valid==0)&&((count>=1)&&(count<=100))){
            int halfway = (int)(count/2);
            current = head;
            for(int i=0; i<halfway; i++){
                current = current.next;
            }
            toReturn = current;
        }
        return toReturn;
    }
}