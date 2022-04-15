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

          <div class="milestoneTitle">

            <p class="milestoneName"> ${milestoneSingle.name} </p>

            <span><i class="fa-solid fa-plus"></i></span>

          </div> 

        </div>

        <div class="innerHiddenMilestoneModule">

          <div class="moduleSingle">

            <p>Module Name</p>

          </div>

        </div>

      </div>
    `;

  }).join('')}`;

}

loadMilestones()