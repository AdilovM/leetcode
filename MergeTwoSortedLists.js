/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let list3 = new ListNode(0);
    let list3Head = list3;

    while(list1 && list2) {
        if(list1.val < list2.val) {
            list3.next = list1
            list1 = list1.next;
        } else {
            list3.next = list2;
            list2 = list2.next;
        }
        list3 = list3.next;
    }
    !list1 ? list3.next = list2 : list3.next = list1;

    return list3Head.next;
};
