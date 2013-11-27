function onShake() {
    alert('Shaked!');
    var tab1 = document.getElementById('t1');
    var tab2 = document.getElementById('t2');
    // keinen mehr selektieren
    tab1.className = "";
    tab2.className = "";
    // Tab 2 selektieren
    tab2.className = "selected"
}