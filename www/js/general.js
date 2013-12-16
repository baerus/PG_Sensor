function onShake() {
    var tab1 = document.getElementById('t1');
    var tab2 = document.getElementById('t2');
    var tab3 = document.getElementById('t3');
    var tab4 = document.getElementById('t4');
    // keinen mehr selektieren
    tab1.className = "";
    tab2.className = "";
    tab3.className = "";
    tab4.className = "";
    // Tab 3 selektieren
    tab3.className = "selected"
    alert('Das Gerät wurde geschüttelt');
}

function setTabSelected(tabId) {
    var clickedTab = document.getElementById(tabId);
    // keinen mehr selektieren
    var tab1 = document.getElementById('t1');
    var tab2 = document.getElementById('t2');
    var tab3 = document.getElementById('t3');
    var tab4 = document.getElementById('t4');
    tab1.className = "";
    tab2.className = "";
    tab3.className = "";
    tab4.className = "";
    // Geklickten Tab selektieren
    clickedTab.className = "selected";
}