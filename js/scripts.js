// const addBtn = document.getElementById('submitBtn');
// const rmBtn = document.getElementById('rmBtn')

function removeParent(ele) {
  ele.parentNode.remove();
}

function submitItem(event) {
  // Set vars
  var ul = document.getElementById('todo');
  var li = document.createElement('li');
  var textInput = document.getElementById('inputBox').value.trim();
  var xButton = document.createElement("BUTTON");
  
  if(textInput != '') {
    // Add Text to li
    li.appendChild(document.createTextNode(textInput));

    // Add Properties to Button
    xButton.innerHTML = "X";
    xButton.id = "rmBtn";
    xButton.setAttribute('onclick', 'removeParent(this)')
    
    // Add Button to li
    li.appendChild(xButton);

    // Add li to ul
    ul.appendChild(li);
  }

    // clear out text input regardless of if statement
    document.getElementById('inputBox').value = '';

};


// Check for clicks on the submit button
// addBtn.addEventListener("click", submitItem);

// Check for clicks on the remove button and remove that element from the page
// rmBtn.addEventListener("click", hello);