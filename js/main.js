let guestList = [];
let guestName = document.getElementById("myInput").value;
const sortFromAtoZ = document.getElementById('sortaz');
const sortFromZToA = document.getElementById('sortza');

function addGuest() {
  let guestName = document.getElementById("myInput").value;
  let guestDescription = document.getElementById("description").value;

  let guestInfoBe = ` <tr id="guestInfo">
                        <td>${guestName}</td>
                        <td>${guestDescription}</td>
                    </tr>`
  guestList.push(guestInfoBe);
  displayGuests(guestList);
}

function addGuestStart() {
  let guestName = document.getElementById("myInput").value;
  let guestDescription = document.getElementById("description").value;
  let guestInfoBe = ` <tr id="guestInfo">
                        <td>${guestName}</td>
                        <td>${guestDescription}.</td>
                    </tr>`
  guestList.unshift(guestInfoBe);
  displayGuests(guestList);
}

function removeFirst() {
  guestList.shift();
  displayGuests(guestList);
}

function removeLast() {
  guestList.pop();
  displayGuests(guestList);
}

function reverseList() {
  guestList.reverse();
  displayGuests(guestList);
}


function displayGuests() {
  $("tbody").remove();
  tbody = document.createElement('TBODY');
  tbody.idName = 'guestsfinal';
  tbody.innerHTML = guestList.join(" ");
  document.getElementById('guests').appendChild(tbody);
}

function sortAZ() {
  guestList.sort();
  displayGuests();
}

function sortZA() {
  guestList.sort();
  guestList.reverse();
  displayGuests();
}
