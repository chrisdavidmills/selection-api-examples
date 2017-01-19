# selection-api-examples
Examples to demonstrate use of the Selection API.

## Key quote generator

This example contains a complete text on the right, and a list on the left, which starts empty.

When you select part of the text in the full quote, the <code>onselectionchanged</code> event handler fires, which causes the current selection to be saved in a variable called <code>selection</code> via the <code>document.getSelection()</code> method.

When the "Create quote from selection" button is pressed, the current selection is converted to a text string using <code>selection.toString()</code>. This string is then placed as the text content of a new list item, and the list item is appended to the list.

When the "Copy key quotes" is pressed, the entire contents of the list is added to the selection using <code>selection.selectAllChildren(quoteList);</code>. We then copy the selection to the OS clipboard using <code>document.execCommand('copy');</code>, and the text can now be copied anywhere you wish.

This example is know to work in Firefox, Chrome, Safari, and Edge; it has not been optimized for mobile.
