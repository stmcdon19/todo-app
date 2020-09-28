// const addBtn = document.getElementById('submitBtn');
// const rmBtn = document.getElementById('rmBtn')

function removeParent(ele) {
  ele.parentNode.remove();
};

function moveParentUp(ele) {
  var parent = ele.parentNode;
  var prevParent =  parent.previousSibling;
  parent.parentNode.insertBefore(parent, prevParent);
};

function moveParentDown(ele) {
  var parent = ele.parentNode;
  var nextParent =  parent.nextSibling;
  nextParent.insertAdjacentElement("afterend",parent);
};

function submitItem(event) {
  // Set vars
  var ul = document.getElementById('todo');
  var li = document.createElement('li');
  var textInput = document.getElementById('inputBox').value.trim();
  var xButton = document.createElement("BUTTON");
  var upButton = document.createElement("BUTTON");
  var downButton = document.createElement("BUTTON");
  
  if(textInput != '') {
    // Add Text to li
    li.appendChild(document.createTextNode(textInput));

    // Add Properties to xButton
    xButton.innerHTML = "X";
    xButton.id = "rmBtn";
    xButton.setAttribute('onclick', 'removeParent(this)')

    // Add Properties to downButton
    downButton.innerHTML = "move down";
    downButton.id = "downBtn";
    downButton.setAttribute('onclick', 'moveParentDown(this)')

    // Add Properties to upButton
    upButton.innerHTML = "move up";
    upButton.id = "upBtn";
    upButton.setAttribute('onclick', 'moveParentUp(this)')
    
    // Add Button to li
    li.appendChild(xButton);
    li.appendChild(upButton);
    li.appendChild(downButton);

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

