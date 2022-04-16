const milestonesData = JSON.parse(dataProgrammingHero).data;

// Milestones Data Load.

function loadMilestones() {
  const milestones = document.querySelector('.milestones');

  // milestones.innerHTML = milestonesData.join('');

  milestones.innerHTML = `${milestonesData.map(function (milestoneSingle) {
    return `
      <div class="milestoneSingle" id="${milestoneSingle._id}">         

        <div class="milestone">

          <input type="checkbox" class="checkbox" onclick="markedMilestone(this, ${milestoneSingle._id})" />

          <div class="milestoneTitle" onclick="openMilestone(this, ${milestoneSingle._id})">

            <p class="milestoneName"> ${milestoneSingle.name} </p>

            <span><i class="fa-solid fa-plus"></i></span>

          </div> 

        </div>

        <div class="innerHiddenMilestoneModule">

          ${milestoneSingle.modules.map(function (moduleSingle) {

            return `
            
              <div class="moduleSingle">

                <p> ${moduleSingle.name} </p>

              </div>
            
            `;
            
          }).join('')}

        </div>

      </div>
    `;

  }).join('')}`;

}


function openMilestone(milestoneElement, id) {
  const currentHiddenPanel = milestoneElement.parentNode.nextElementSibling;
  const shownPanel = document.querySelector('.show');
  const active = document.querySelector('.active');

  // First Remove Previous Active Class If Any [Other Then The Clicked One]
  if (active && !currentHiddenPanel.classList.contains('active')) {
    active.classList.remove('active');
  }

   // Toggle Current Clicked One
  milestoneElement.classList.toggle('active');
  

  // First Hide Previous Panel If Open [Other Then The Clicked Element]
  if (!currentHiddenPanel.classList.contains('show') && shownPanel) {
    shownPanel.classList.remove('show');
  }
  
  // Toggle Current Element 
  currentHiddenPanel.classList.toggle('show');

  showMilestoneImg(id);

}


function showMilestoneImg(id) {
  const milestoneImg = document.querySelector('.milestoneImg');
  const milestoneTitle  = document.querySelector('.title');
  const milestoneDescription  = document.querySelector('.details');

  milestoneImg.style.opacity = '0';

  milestoneImg.src = milestonesData[id].image;
  milestoneTitle.innerText = milestonesData[id].name;
  milestoneDescription.innerText = milestonesData[id].description;
}

// Listen For Milestone Image Load
const milestoneImg = document.querySelector('.milestoneImg');

milestoneImg.onload = function () {

  this.style.opacity = '1';

}



// Marked Milestone Shift On The Marked List

function markedMilestone(checkbox, id) {
  const markedMilestoneList = document.querySelector('.markedMilestoneList');
  const milestoneList = document.querySelector('.milestones');
  const markedItem = document.getElementById(id);

  if (checkbox.checked) {
    // Mark As Done
    milestoneList.removeChild(markedItem);
    markedMilestoneList.appendChild(markedItem);
  } else {
    // Back To Main List
    milestoneList.appendChild(markedItem);
    markedMilestoneList.removeChild(markedItem);
  }
}



loadMilestones()