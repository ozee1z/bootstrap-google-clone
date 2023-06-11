/*Hide tooltip on app icon when
clicked on and make it visible when hover over it*/

const tooltipText = document.querySelector('.tooltip-text');

function mousedown(){
  tooltipText.style.visibility = "hidden";
};

function mouseover() {
  tooltipText.style.visibility = "";
};

/*Hide bootstrap collapse pane when you click outside of it*/
document.addEventListener('click', function(event){
    const target = event.target;
    const collapse = document.querySelector('.collapse');
    const collapsePane = document.querySelector('.collapsePane');

    if(!collapse.contains(target) && target !== collapsePane){
        collapse.classList.remove('show');
    }
});

/*Tooltip for the mic and camera icons in the search bar */
document.addEventListener('DOMContentLoaded', function() {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});


