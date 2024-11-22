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
  