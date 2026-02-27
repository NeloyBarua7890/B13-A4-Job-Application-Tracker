1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: 1. getElementById - Only selects one element by its id, 2. getElementsByClassName - Selects all elements with a specific class name, 3. querySelector - Selects the first matching element, 4. querySelectorAll - Selects ALL matching elements

2. How do you create and insert a new element into the DOM?

Answer: Firstly, I've to create the element. "Example: const newDiv = document.createElement("div");" which is not in the page yet. Secondly, I've to add content or attributes like, "Example: newDiv.textContent = "Hello World"; or newDiv.classList.add("box");" like that. Thirdly, I've to insert it into the DOM using different function like "append()", "appendChild()" etc. "Example: document.body.append(newDiv);"

3. What is Event Bubbling? And how does it work?

Answer: Event Bubbling means when an event happens on a child element, it first runs on that element, then it "bubbles up" to its parent, then grandparent, and continues up to document. Suppose, we have a button like this:

"<div id="parent"><button id="child">Click Me</button></div>"

Here, button = child, div = parent. If we click the button:

1. First → button's event runs

2. Then → div's event runs

3. Then → body

4. Then → document

If we add some javascript functionality over 'child' named 'button' and 'parent' named 'div' it will do something according to our js functionality. That's the event bubbling.

4. What is Event Delegation in JavaScript? Why is it useful?

Answer: Event Delegation is a technique where instead of adding event listeners to multiple child elements, we add one event listener to their parent and use event bubbling to handle events.

Suppose, we have 100 buttons. If we don't use event delegation we have to add 100 event listeners to handle those 100 buttons. But instead of adding 100 event listeners we can use only one event listener to their parent for handling those buttons and it's a powerful way.

5. What is the difference between preventDefault() and stopPropagation() methods?

Answer: preventDefault() Stops the default browser behavior of an element but it does NOT stop bubbling. Suppose, we have a link like that:

Example: "<a href="https://google.com">Go to Google</a>"

Now, if we clink on that link it will navigate us to that particular website. After creating a function with "preventDefault()" using javascript now clicking the link will not navigate.

But, stopPropagation() stops the event from bubbling up. It does NOT stop default behavior.

preventDefault() prevents the browser’s default behavior of an element, while stopPropagation() prevents the event from propagating to parent elements in the DOM.
