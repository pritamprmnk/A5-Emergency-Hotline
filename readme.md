1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans : 
      getElementById : It finds a single element by its specific ID. Since IDs must be unique, it always returns only one element.

      getElementsByClassName :  It finds multiple elements by a specific class name. It returns an array-like collection (an HTMLCollection) containing all elements that have that class name.

      querySelector / querySelectorAll : These two methods find elements using CSS selectors. querySelector returns the first matching element, while querySelectorAll returns all matching elements as a NodeList. This is very flexible because it can find elements using IDs, classes, tags, or any other CSS selector.

2. How do you create and insert a new element into the DOM?
Ans : First create a new HTML element using the document.createElement() method.You can add text, classes,    
      or IDs to the newly created element as needed.Now insert the new element into or next to an existing element in the DOM using the appendChild() or insertBefore() methods.

3. What is Event Bubbling and how does it work?
Ans : Event bubbling is a process where an event (like a click) that occurs on an element also bubbles up 
      to its parent or ancestor elements.

How Does It Work?
      When you click on a nested element, the event is first triggered on that element, then on its immediate parent, and this process continues all the way up to the top of the document.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans : Event Delegation is a technique where, instead of adding separate event listeners to each child element, 
      we attach a single event listener to the parent element. When an event is triggered, it reaches the parent through event bubbling, and then we can use event.target to identify which child element triggered the event.
Why is it Useful?

     Improves performance.
    Easier to handle dynamic elements.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans :
preventDefault()
Purpose: Prevents the browsers default action associated with the event.
It does not stop the event from bubbling up the DOM.

stopPropagation()
Purpose: Stops the event from bubbling (or propagating) to parent elements.
It does not prevent the default behavior of the element.

Difference
preventDefault() → Stops the default browser action.
stopPropagation() → Stops the event from traveling (bubbling/capturing) to other elements.










2. How do you create and insert a new element into the DOM ?
Ans : First, you must create a new element using document.createElement(). Content or 
      attributes can then be added to the created element. Finally, you must add the new element
      to the DOM using appendChild() or insertBefore().

3. What is Event Bubbling and how does it work? 
Ans : Event Bubbling is a process where an event starts from the sub-element and propagates upwards 
      through its parent elements, eventually reaching the document.

4.          