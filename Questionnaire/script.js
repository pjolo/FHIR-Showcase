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

