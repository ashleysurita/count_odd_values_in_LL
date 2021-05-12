class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function countOdd(head) {
    if(!head) return 0
    
    let count = 0
    if(head.value === 1 || head.value % 2 > 0){
        count++
    }
    
    return count + countOdd(head.next)
}

// Tests
console.log(countOdd(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))), 'expect 2')
console.log(countOdd(new ListNode(1)), 'expect 1')
console.log(countOdd(new ListNode(3, new ListNode(3, new ListNode(3, new ListNode(3))))), 'expect 4')
