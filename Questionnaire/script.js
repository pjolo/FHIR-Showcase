// This is the form definition

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

LForms.Util.addFormToPage(formDef, 'formContainer');

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

// NEU: Funktion zum Laden einer FHIR QuestionnaireResponse
function loadFHIRResponse(responseJSON) {
  // Annahme: responseJSON ist das JSON-Objekt einer QuestionnaireResponse
  var lfData = LForms.Util.getFormFHIRData('R4', responseJSON, 'QuestionnaireResponse');

  // Fix: für coded values immer nur code oder display übergeben
  (lfData.item || []).forEach(function(item) {
    if (Array.isArray(item.answer)) {
      item.answer.forEach(function(answer) {
        if (answer.valueCoding) {
          answer.value = answer.valueCoding.display || answer.valueCoding.code || '';
        } else if (answer.valueString) {
          answer.value = answer.valueString;
        } else if (answer.valueInteger) {
          answer.value = answer.valueInteger;
        } else if (answer.valueBoolean !== undefined) {
          answer.value = answer.valueBoolean;
        } else if (answer.valueDate) {
          answer.value = answer.valueDate;
        } // weitere Types nach Bedarf...
      });
    }
  });

  LForms.Util.addFormToPage(lfData, 'formContainer');
}

// Beispiel-Button zum Laden einer Response
document.getElementById('loadResponseButton').addEventListener('click', function() {
  const jsonInput = document.getElementById('responseInput').value;
  try {
    const responseObj = JSON.parse(jsonInput);
    loadFHIRResponse(responseObj);
  } catch (error) {
    alert('Invalid QuestionnaireResponse JSON!');
  }
});
