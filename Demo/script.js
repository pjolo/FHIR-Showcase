//Tabs steuern
function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(function(tab){
    tab.style.display = 'none';
  });
  document.getElementById(tabId).style.display = 'block';
}
// Beim Start das erste Tab anzeigen
showTab('formTab');

// Standard-Formulardefinition
var formDef = {
  "status": "draft",
  "title": "Demo form",
  "resourceType": "Questionnaire",
  "item": [
    {
      "type": "group",
      "linkId": "808145178143",
      "text": "Basic Information"
    },
    {
      "type": "string",
      "linkId": "900843292121",
      "text": "Name"
    },
    {
      "type": "integer",
      "linkId": "628859034495",
      "text": "Age"
    },
    {
      "type": "dateTime",
      "linkId": "854205526824",
      "text": "Appointment Date and Time"
    },
    {
      "type": "group",
      "linkId": "/X123",
      "text": "Family member",
      "item": [
        {
          "type": "string",
          "linkId": "/X123/X124",
          "text": "Name"
        },
        {
          "type": "group",
          "repeats": true,
          "linkId": "/X123/X125",
          "text": "Surgical History",
          "item": [
            {
              "type": "date",
              "linkId": "/X123/X125/X126",
              "text": "Date"
            },
            {
              "type": "string",
              "linkId": "/X123/X125/X127",
              "text": "Surgery type"
            }
          ]
        }
      ]
    }
  ]
};

// Default render
LForms.Util.addFormToPage(formDef, 'formContainer');

// Modal öffnen
document.getElementById('addFormButton').addEventListener('click', function() {
  document.getElementById('jsonModal').style.display = 'block';
});

// Modal schließen
document.getElementById('closeModalButton').addEventListener('click', function() {
  document.getElementById('jsonModal').style.display = 'none';
});

// Formular aus JSON anzeigen
document.getElementById('renderFormButton').addEventListener('click', function() {
  const jsonInput = document.getElementById('jsonInput').value;
  try {
    const formDef = JSON.parse(jsonInput);
    LForms.Util.addFormToPage(formDef, 'formContainer');
    document.getElementById('jsonModal').style.display = 'none';
  } catch (error) {
    alert('Invalid JSON format');
  }
});

// QuestionnaireResponse aus JSON anzeigen
document.getElementById('renderQRButton').addEventListener('click', function() {
  const qrInput = document.getElementById('qrInput').value;
  try {
    const qrDef = JSON.parse(qrInput);
    // Achtung: LForms erwartet eigentlich ein QuestionnaireResponse + zugehöriges Questionnaire.
    // Für Demo: Einfaches Rendern wie beim Formular.
    LForms.Util.addFormToPage(qrDef, 'qrRenderContainer');
  } catch (error) {
    alert('Invalid JSON format');
  }
});
