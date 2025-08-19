// Funktion zur Tab-Auswahl (minimalistisch)
function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(function(tab){
    tab.style.display = 'none';
  });
  document.getElementById(tabId).style.display = 'block';
}

// Event Listener für das neue Tab
document.getElementById('renderQRButton').addEventListener('click', function() {
  const qrInput = document.getElementById('qrInput').value;
  try {
    const qrDef = JSON.parse(qrInput);
    // Annahme: LForms kann auch QuestionnaireResponse rendern – falls du ein spezifisches Function brauchst, passe es an.
    LForms.Util.addFormToPage(qrDef, 'qrRenderContainer');
  } catch (error) {
    alert('Invalid JSON format');
  }
});
