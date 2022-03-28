var fib = function (n) {
  /* using recursion
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    }
    return fib(n-1) + fib(n-2);
  */
   //Using iteration
   if (n === 0) {
    return 0;
    } else if (n === 1) {
    return 1;
    }
   let prev  = 0;
   let current = 1;
   let next;

   while(n>1) {
     next = prev + current;
     prev = current;
     current = next;
     n--;
   }
   return next;
};