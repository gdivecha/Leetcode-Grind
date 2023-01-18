/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    /*
    Brute Force Method:
    We could just Make 2 arrays where the first one is just a collection of the values of each node in order from
    left to right and the other is one where the values of the firsdt array are reversed
    Then, we go through both arrays from index 0 to the end to compare, and the first
    comparison where the elements of both arrays at the specific index are not the same, we return false
    But, this gives O(n) time complexity and O(n) space complexity

    Efficient Method:
    If we want O(1) space complecity, then we probably will not be able to make any variable arrays
    We need a fixed value most likely meaning that we won't make any arrays
    We will just compare in place
    How do we do that?
    One thing we could do is that we can go through the linked list once as we count the number of nodes that exist
    If the number of nodes is even, then we find the ceiling of the length of linked list / 2
    We set our pointer to the node that corresponds to that number
    We will now somehow have to integrate the reverse linked list algorithm to go backwards from the floor of length of linked list / 2 to the left
    As we traverse, we will compare both values
    If the count is odd, then we must basically find the halfway point for e.g. 11/2 = 5
    And we split it into 0-5 = 6 values and 6-11 = 6 values
    How do we implement the reverse linked list algorithm?
    Recursive approach:
        We want to convert for e.g. 1 > 2 > 4 > 7 > 9 > 11 to 1 < 2 < 4 < 7 < 9 < 11

    Procedural approach:
        We want to convert for e.g. 1 > 2 > 4 > 7 > 9 > 11 to 1 < 2 < 4 < 7 < 9 < 11
        I will use a for loop to iterate through the linkedlist to get to the middle and then
        We will do this:
        We take:                            1 > 2 > 4 > 7
        We are currently at:                        ^
        We make the next of 4 = null
        Which makes it:                     1 > 2 > 4 > null
        We are at:                                  ^
        Instead, we can actually make it:   1 > 2 >< 4
        We are at:                                  ^
        This way, we make 4 point to 2
        and 2 is already pointing to 4
        Now, we go to the next to 4, and do the same thing:
        1 > 2 >< 4
            ^
        We make 2.next = 1
        1 >< 2 < 4
             ^
        We go to 1
        1 >< 2 < 4
        ^
        We make 1.next = null since 1.next = 2's object node itself AND the prev of 1 is -1
        Why is prev of 1 = -1?
        Because what we will do is that we will create another node with a value of -1 
        Then the next of that node will be the head of the linkedlist we get
        Why -1?
        because we see that int he criteria, we want each node to have avalue of 0<=9
        As we are also reversing the list, we also compare values
    Minor improvement -  we will use the tortoise and hare method to find middle of the array faster instead fo going
    through it once and counting number of nodes
    */
    function findMiddleNode(head){
        let tortoise = head,
            hare = head;
            totalNodes = 0;
        while((hare!==null)&&(hare.next!==null)){
            tortoise = tortoise.next;
            if(hare.next.next!==null){
                totalNodes += 2;
            }
            else{
                totalNodes += 1;
            }
            hare = hare.next.next;
        }
        return [tortoise, ++totalNodes];
    }

    let reverseHalfList = function(head, middleNode){
        let currentHead = head,
            newHead;
        // console.log(prevNode, currentHead);
        while(currentHead!==middleNode){
            newHead = currentHead;
            currentHead = currentHead.next;
        }
        newHead.next = null;
        // console.log('the left start head is ' + newHead.val);
        // currentHead = head;
        // const recursiveFunction = (currentHead) => {
        //     if(currentHead===null || currentHead.next===null){
        //         return currentHead;
        //     }
        //     else{
        //         let newerHead = recursiveFunction(currentHead.next)
        //         currentHead.next.next = currentHead;
        //         currentHead.next = null;
        //         return newerHead;
        //     }
        // }
        var reverseList = (head) => {
            if(head == null || head.next == null) {
                return head
            }
            newHead = reverseList(head.next);
            head.next.next = head;
            head.next = null;
            return newHead;
        };
        return reverseList(head);
    }

    if(head===null){
        return null;
    }
    else if(head.next===null){
        return head;
    }
    else{
        let secondHalf;
        const [node, numNodes] = findMiddleNode(head);

        if(numNodes%2===0){
            secondHalf = node;
        }
        else{
            secondHalf = node.next;
        }

        console.log(`Middle is: ${node.val}, and length of nodes is: ${numNodes}`);
        // console.log(reverseHalfList(head, node));

        let leftHead = reverseHalfList(head, node),
            rightHead = secondHalf;

        console.log(`Left head is: ${leftHead.val}, Right head is: ${rightHead.val}`);

        console.log(leftHead);
        console.log(rightHead);


        while(rightHead!==null && leftHead!==null){
            if(rightHead.val!==leftHead.val){
                return false;
            }
            rightHead = rightHead.next;
            leftHead = leftHead.next;
        }
        return true;
    }
};
