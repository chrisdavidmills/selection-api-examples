# selection-api-examples
Examples to demonstrate use of the Selection API.

## Key quote generator ([see it running live](https://chrisdavidmills.github.io/selection-api-examples/))

This example contains a complete text on the right, and a list on the left, which starts empty.

When you select part of the text in the full quote, the <code>onselectionchanged</code> event handler fires, which causes the current selection to be saved in a variable called <code>selection</code> via the <code>document.getSelection()</code> method.

When the "Create quote from selection" button is pressed, the current selection is converted to a text string using <code>selection.toString()</code>. This string is then placed as the text content of a new list item, and the list item is appended to the list.

When the "Copy key quotes" is pressed, the entire contents of the list is added to the selection using <code>selection.selectAllChildren(quoteList);</code>. We then copy the selection to the OS clipboard using <code>document.execCommand('copy');</code>, and the text can now be copied anywhere you wish.

This example is know to work in Firefox, Chrome, Safari, and Edge; it has not been optimized for mobile.

## setBaseAndExtent() example ([see it running live](https://chrisdavidmills.github.io/selection-api-examples/setBaseAndExtent.html))

In this example, we have two paragraphs containing <code>span</code>s, each one containing a single word. The first one is set as the <code>anchorNode</code> and the second is set as the <code>focusNode</code>. We also have an additional paragraph that sits in between the two nodes.

Next, we have two form <code>input</code>s that allow you to set the <code>anchorOffset</code> and <code>focusOffset</code> — they both have a default value of 0.

We also have a <code>button</code> that when pressed invokes a function that runs the <code>[setBaseAndExtent()](https://developer.mozilla.org/en-US/docs/Web/API/Selection/setBaseAndExtent)</code> method with the specified offsets, and copies the selection into the output paragraph at the very bottom of the HTML.
