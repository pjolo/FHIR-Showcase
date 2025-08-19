// Tab-Handling
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Set Standardtab
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("defaultTab").click();
});

// Questionnaire Definition (Demo)
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

// Initiales Questionnaire anzeigen
LForms.Util.addFormToPage(formDef, 'formContainer');

// Modal-Logik (Questionnaire als JSON laden)
document.getElementById('addFormButton').addEventListener('click', function() {
  document.getElementById('jsonModal').style.display = 'block';
});
document.getElementById('closeModalButton').addEventListener('click', function() {
  document.getElementById('jsonModal').style.display = 'none';
});
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

// Funktion zum Anzeigen einer FHIR QuestionnaireResponse im zweiten Tab
document.getElementById('loadResponseButton').addEventListener('click', function() {
  const jsonInput = document.getElementById('responseInput').value;
  try {
    const responseObj = JSON.parse(jsonInput);
    // Umwandlung der Response in eine LForms-Struktur
    var lfData = LForms.Util.convertFHIRDataToLForms('QuestionnaireResponse', responseObj, 'R4');
    // Hier: Werte extrahieren und Coded-Werte als String anzeigen
    (lfData.item || []).forEach(function(item) {
      if (Array.isArray(item.answer)) {
        item.answer.forEach(function(answer) {
          if (answer.valueCoding) {
            answer.value = answer.valueCoding.display || answer.valueCoding.code || '';
          } else if (answer.valueString) {
            answer.value = answer.valueString;
          } else if (answer.valueInteger) {
            answer.value = answer.valueInteger;
          } else if (typeof answer.valueBoolean !== "undefined") {
            answer.value = answer.valueBoolean;
          } else if (answer.valueDate) {
            answer.value = answer.valueDate;
          }
        });
      }
    });
    // Rendern im zweiten Container
    LForms.Util.addFormToPage(lfData, 'responseContainer');
  } catch (error) {
    alert('Invalid QuestionnaireResponse JSON!');
  }
});
