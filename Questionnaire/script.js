// --- Tab-Handling ---
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

// Beim Laden: Standardtab aktivieren und Formular rendern
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("defaultTab").click();
  LForms.Util.addFormToPage(formDef, 'formContainer');
});

// --- Demo Questionnaire Definition ---
var formDef = {
  "status": "draft",
  "title": "Demo form",
  "resourceType": "Questionnaire",
  "item": [
    { "type": "group", "linkId": "808145178143", "text": "Basic Information" },
    { "type": "string", "linkId": "900843292121", "text": "Name" },
    { "type": "integer", "linkId": "628859034495", "text": "Age" },
    { "type": "dateTime", "linkId": "854205526824", "text": "Appointment Date and Time" },
    {
      "type": "group",
      "linkId": "/X123",
      "text": "Family member",
      "item": [
        { "type": "string", "linkId": "/X123/X124", "text": "Name" },
        {
          "type": "group",
          "repeats": true,
          "linkId": "/X123/X125",
          "text": "Surgical History",
          "item": [
            { "type": "date", "linkId": "/X123/X125/X126", "text": "Date" },
            { "type": "string", "linkId": "/X123/X125/X127", "text": "Surgery type" }
          ]
        }
      ]
    }
  ]
};

// --- Modal-Logik (Questionnaire als JSON laden) ---
document.getElementById('addFormButton').addEventListener('click', function() {
  document.getElementById('jsonModal').style.display = 'block';
});
document.getElementById('closeModalButton').addEventListener('click', function() {
  document.getElementById('jsonModal').style.display = 'none';
});
document.getElementById('renderFormButton').addEventListener('click', function() {
  const jsonInput = document.getElementById('jsonInput').value;
  try {
    const customFormDef = JSON.parse(jsonInput);
    LForms.Util.addFormToPage(customFormDef, 'formContainer');
    document.getElementById('jsonModal').style.display = 'none';
  } catch (error) {
    alert('Invalid JSON format');
  }
});

// --- Response-Eingabe und Anzeige ---
document.getElementById('loadResponseButton').addEventListener('click', function() {
  const jsonInput = document.getElementById('responseInput').value;
  try {
    const responseObj = JSON.parse(jsonInput);
    // LForms verarbeitet das direkt korrekt:
    LForms.Util.addFormToPage(responseObj, 'responseContainer');
  } catch (error) {
    alert('Invalid QuestionnaireResponse JSON!');
  }
});
