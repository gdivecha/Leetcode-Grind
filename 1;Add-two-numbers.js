/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    /*
    Proper way:
    Instead of going through both arrays once and then doing 10^m * current number
    And then coverting thmboth into actual numbers for adding, I will use the sum and carry method
    The way it will work is that basically:
    We will create a function that basically does this:
    Input: l1 = [2,4,3], l2 = [5,6,4]
    2+5 = 7; 7mod10 = 7 and 7/10 = 0
    thus, the carry in for the next one = 0 and sum bit = 7
    Thus, 0+4+6 = 10
    thus, 10mod10 = 0 = sum bit and 10/10 = 1 = carry bit
    Thus, 1+3+4 = 8
    thus, carry bit = 8/10 = 0 and sum bit = 8mod10 = 8
    */
    let head = l1
    let l1Len = 0,
        l2Len = 0;
    while(head!=null){
        l1Len++;
        head = head.next;
    }
    head = l2;
    while(head!=null){
        l2Len++;
        head = head.next;
    }
    shorter = (l1Len<l2Len) ? (l1Len) : (l2Len);
    headTop = (l1Len<l2Len) ? (l2) : (l1);
    headBottom = (l1Len<l2Len) ? (l1) : (l2);    let sumBit = 0,
        carryBit = 0;
    let remainder = new ListNode(sumBit,null);
    headRemainder = remainder;
    for(let i=0; i<shorter; i++){
        const currentSum = carryBit + headTop.val + headBottom.val;
        sumBit = currentSum % 10;
        carryBit = Math.floor(currentSum / 10);
        const nextNode = new ListNode(0, null); 
        headTop = headTop.next;
        headBottom = headBottom.next;      
        headRemainder.val = sumBit;
        if(headTop !== null || headBottom !== null){
            headRemainder.next = nextNode;
            headRemainder = headRemainder.next;
        }
    }
    const lenDiff = Math.abs(l1Len - l2Len); //if 0 then l1==l2 otherwise one is greater than the other
    if(lenDiff==0){
        const nextNode = new ListNode(0, null);
        if(carryBit===0){
            return remainder;
        }
        else{
            nextNode.val = carryBit;
            headRemainder.next = nextNode;
            headRemainder = headRemainder.next;
        }
        return remainder;
    }
    else{
        while(headTop!=null){
            const currentSum = carryBit + headTop.val;
            sumBit = currentSum % 10;
            carryBit = Math.floor(currentSum / 10);
            const nextNode = new ListNode(0, null);
            headTop = headTop.next;
            headRemainder.val = sumBit;
            if(headTop !== null){
                headRemainder.next = nextNode;
                headRemainder = headRemainder.next;
            }
            else{
                if(carryBit===0){
                    return remainder;
                }
                else{
                    nextNode.val = carryBit;
                    headRemainder.next = nextNode;
                    headRemainder = headRemainder.next;
                }
            }
        }
        return remainder;
    }

};
