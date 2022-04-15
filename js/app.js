const milestonesData = JSON.parse(dataProgrammingHero).data;

// Milestones Data Load.

function loadMilestones() {
  const milestones = document.querySelector('.milestones');

  // milestones.innerHTML = milestonesData.join('');

  milestones.innerHTML = `${milestonesData.map(function (milestoneSingle) {
    return `
      <div class="milestoneSingle">         

        <div class="milestone">

          <input type="checkbox" class="checkbox" />

          <div class="milestoneTitle" onclick="openMilestone(this)">

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


function openMilestone(milestoneElement) {
  const currentHiddenPanel = milestoneElement.parentNode.nextElementSibling;
  const shownPanel = document.querySelector('.show');

  if (!currentHiddenPanel.classList.contains('show') && shownPanel) {
    shownPanel.classList.remove('show');
  }
  
  currentHiddenPanel.classList.toggle('show');
}

loadMilestones()