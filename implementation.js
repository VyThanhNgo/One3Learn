function showTab(tabId) {
    // Hide all tab content items
    var tabContentItems = document.querySelectorAll('.tab-content-item');
    tabContentItems.forEach(function(item) {
      item.style.display = 'none';
    });
  
    // Show the selected tab content item
    var activeTab = document.getElementById(tabId);
    if (activeTab) {
      activeTab.style.display = 'block';
    }
  }
    // Toggle dropdown on click for the Implementation menu
    document.querySelector('.dropbtn').addEventListener('click', function(event) {
      const dropdownContent = document.querySelector('.dropdown-content');
      dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
      event.stopPropagation(); // Prevent the click event from propagating
    });

    // Close the dropdown if the user clicks outside of it
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.dropdown')) {
        document.querySelector('.dropdown-content').style.display = 'none';
      }
    });
