function addItem(e) {
  e.preventDefault();

  const submit = document.getElementById('submit');
  const editItem = null;
  if (submit.value !== 'Submit') {
    // console.log('Hello');

    editItem.target.parentNode.childNodes[0].data = document.getElementById('item').value;

    submit.value = 'Submit';
    document.getElementById('item').value = '';

    document.getElementById('lblsuccess').innerHTML = 'Text edited successfully';

    document.getElementById('lblsuccess')
      .style.display = 'block';

    setTimeout(() => {
      document.getElementById('lblsuccess')
        .style.display = 'none';
    }, 3000);

    return false;
  }

  const newItem = document.getElementById('item').value;
  if (newItem.trim() === '' || newItem.trim() === null) return false;
  document.getElementById('item').value = '';

  const li = document.createElement('li');
  li.className = 'list-group-item';

  const items = document.getElementById('items');
  const deleteButton = document.createElement('button');

  deleteButton.className = 'btn-danger btn btn-sm float-right delete';

  deleteButton.appendChild(document.createTextNode('Delete'));

  const editButton = document.createElement('button');

  editButton.className = 'btn-success btn btn-sm float-right edit';

  editButton.appendChild(document.createTextNode('Edit'));

  li.appendChild(document.createTextNode(newItem));
  li.appendChild(deleteButton);
  li.appendChild(editButton);

  items.appendChild(li);
  return 'dsf';
}

function removeItem(e) {
  e.preventDefault();
  const items = document.getElementById('items');
  const submit = document.getElementById('submit');
  // const editItem = null;
  // const items = document.getElementById('items');

  if (e.target.classList.contains('delete')) {
    if (window.confirm('Are you Sure?')) {
      const li = e.target.parentNode;
      items.removeChild(li);
      document.getElementById('lblsuccess').innerHTML = 'Text deleted successfully';

      document.getElementById('lblsuccess')
        .style.display = 'block';

      setTimeout(() => {
        document.getElementById('lblsuccess')
          .style.display = 'none';
      }, 3000);
    }
  }
  if (e.target.classList.contains('edit')) {
    document.getElementById('item').value = e.target.parentNode.childNodes[0].data;
    submit.value = 'EDIT';
    // editItem = e;
  }
}

window.onload = () => {
  const form1 = document.querySelector('#addForm');
  const items = document.getElementById('items');

  form1.addEventListener('submit', addItem);
  items.addEventListener('click', removeItem);
};

// function toggleButton(ref, btnID) {
//   document.getElementById(btnID).disabled = false;
// }

// finish stuff