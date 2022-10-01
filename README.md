# Steeleye_Frontend_engineer_assignment
React Component Code Review

# 1.
Explain what the simple List component does.

Lists are used to display data in an ordered format and mainly used to display menus on websites.
We use the map() function for traversing the list element, and for updates, we enclosed them between curly braces {}. Finally, we assign the array elements to listItems. Now, include the new list inside <ul> </ul> elements and render it to the DOM.

In order to create lists of elements, A character characteristic "key" needed to be included .To determine whether elements in a list had already been modified, added, or destroyed, React need so many keys.An individual identifier is required for each object.An id of an entity can also works fine for all of that. 


# 2.
What problems / warnings are there with code?

Warning 1:
React Hook useEffect has a missing dependency: 'setSelectedIndex'. Either include it or remove the dependency array react-hooks/exhaustive-deps

As per the warning suggested solution, I include the setSelectedIndex in the dependency array in useEffect(). UseEffect accepts two arguments. The second argument is optional. useEffect(function, dependency)
  
As per the program given the function name in the useEffect was given wrong and changed it to selectedIndex from setSelectedIndex

# 3.
Please fix, optimize, and/or modify the component as much as you think is necessary.
  
fixed lines are marked by comments in the program


