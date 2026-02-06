// Clinical Information System JavaScript

// Patient data
const patientsData = {
  "P001": {
    "id": "P001",
    "demographics": {
      "name": "Maria Schmidt",
      "age": 45,
      "gender": "Female",
      "dateOfBirth": "1979-03-15",
      "address": "Musterstraße 123, 10115 Berlin, Deutschland",
      "phone": "+49 30 12345678",
      "email": "maria.schmidt@email.de",
      "emergencyContact": {
        "name": "Hans Schmidt",
        "relationship": "Ehemann",
        "phone": "+49 30 87654321"
      }
    },
    "allergies": [
      {
        "allergen": "Penicillin",
        "reaction": "Hautausschlag, Schwellung",
        "severity": "Schwer",
        "type": "Medikament",
        "lastReaction": "2022-08-15"
      },
      {
        "allergen": "Erdnüsse",
        "reaction": "Anaphylaxie",
        "severity": "Lebensbedrohlich",
        "type": "Nahrung",
        "lastReaction": "2021-06-20"
      }
    ],
    "medications": [
      {
        "name": "Lisinopril",
        "dosage": "10mg",
        "frequency": "Täglich",
        "startDate": "2023-01-15",
        "prescribedBy": "Dr. Weber",
        "indication": "Bluthochdruck"
      },
      {
        "name": "Metformin",
        "dosage": "500mg",
        "frequency": "Zweimal täglich",
        "startDate": "2022-11-10",
        "prescribedBy": "Dr. Mueller",
        "indication": "Diabetes Typ 2"
      }
    ],
    "problems": [
      {
        "problem": "Hypertonie (Bluthochdruck)",
        "icdCode": "I10",
        "status": "Aktiv",
        "diagnosedDate": "2023-01-10",
        "severity": "Moderat"
      },
      {
        "problem": "Diabetes mellitus Typ 2",
        "icdCode": "E11",
        "status": "Aktiv",
        "diagnosedDate": "2022-11-05",
        "severity": "Leicht"
      }
    ],
    "vitalSigns": {
      "latest": {
        "bloodPressure": "135/85 mmHg",
        "heartRate": "72 bpm",
        "temperature": "36.8°C",
        "respiratoryRate": "16/min",
        "oxygenSaturation": "98%",
        "recordedDate": "2025-06-03"
      },
      "trends": [
        {"date": "2025-06-01", "systolic": 140, "diastolic": 88, "heartRate": 75},
        {"date": "2025-06-02", "systolic": 138, "diastolic": 86, "heartRate": 73},
        {"date": "2025-06-03", "systolic": 135, "diastolic": 85, "heartRate": 72}
      ]
    },
    "immunizations": [
      {
        "vaccine": "COVID-19 mRNA",
        "date": "2024-10-15",
        "manufacturer": "BioNTech/Pfizer",
        "lotNumber": "ABC123",
        "nextDue": "2025-10-15"
      },
      {
        "vaccine": "Influenza",
        "date": "2024-09-20",
        "manufacturer": "Sanofi",
        "lotNumber": "FLU456",
        "nextDue": "2025-09-20"
      }
    ],
    "procedures": [
      {
        "procedure": "Routine Blutuntersuchung",
        "date": "2025-05-15",
        "performer": "Dr. Weber",
        "location": "Praxis Dr. Weber"
      },
      {
        "procedure": "EKG",
        "date": "2025-01-20",
        "performer": "Dr. Mueller",
        "location": "Kardiologie Zentrum"
      }
    ],
    "socialHistory": {
      "smokingStatus": "Nie geraucht",
      "alcoholUse": "Gelegentlich (1-2 Gläser Wein pro Woche)",
      "occupation": "Lehrerin",
      "exerciseFrequency": "3x pro Woche",
      "maritalStatus": "Verheiratet"
    }
  },
  "P002": {
    "id": "P002",
    "demographics": {
      "name": "Hans Mueller",
      "age": 62,
      "gender": "Male",
      "dateOfBirth": "1962-07-22",
      "address": "Hauptstraße 456, 20095 Hamburg, Deutschland",
      "phone": "+49 40 11223344",
      "email": "hans.mueller@email.de",
      "emergencyContact": {
        "name": "Petra Mueller",
        "relationship": "Ehefrau",
        "phone": "+49 40 44332211"
      }
    },
    "allergies": [
      {
        "allergen": "Aspirin",
        "reaction": "Magenschmerzen",
        "severity": "Moderat",
        "type": "Medikament",
        "lastReaction": "2023-03-10"
      }
    ],
    "medications": [
      {
        "name": "Atorvastatin",
        "dosage": "20mg",
        "frequency": "Täglich abends",
        "startDate": "2024-01-05",
        "prescribedBy": "Dr. Fischer",
        "indication": "Erhöhte Cholesterinwerte"
      }
    ],
    "problems": [
      {
        "problem": "Hypercholesterinämie",
        "icdCode": "E78.0",
        "status": "Aktiv",
        "diagnosedDate": "2024-01-01",
        "severity": "Leicht"
      }
    ],
    "vitalSigns": {
      "latest": {
        "bloodPressure": "125/80 mmHg",
        "heartRate": "68 bpm",
        "temperature": "36.5°C",
        "respiratoryRate": "14/min",
        "oxygenSaturation": "99%",
        "recordedDate": "2025-06-03"
      },
      "trends": [
        {"date": "2025-06-01", "systolic": 128, "diastolic": 82, "heartRate": 70},
        {"date": "2025-06-02", "systolic": 126, "diastolic": 81, "heartRate": 69},
        {"date": "2025-06-03", "systolic": 125, "diastolic": 80, "heartRate": 68}
      ]
    },
    "immunizations": [
      {
        "vaccine": "Tetanus/Diphtherie",
        "date": "2024-07-10",
        "manufacturer": "GSK",
        "lotNumber": "TET789",
        "nextDue": "2034-07-10"
      }
    ],
    "procedures": [
      {
        "procedure": "Cholesterin-Screening",
        "date": "2024-12-15",
        "performer": "Dr. Fischer",
        "location": "Laborpraxis Nord"
      }
    ],
    "socialHistory": {
      "smokingStatus": "Ex-Raucher (aufgehört 2020)",
      "alcoholUse": "Moderat (2-3 Bier pro Woche)",
      "occupation": "Rentner",
      "exerciseFrequency": "Täglich spazieren",
      "maritalStatus": "Verheiratet"
    }
  }
};

let currentPatient = 'P001';
let vitalsChart = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    loadPatient(currentPatient);
    setupNavigation();
}

function setupEventListeners() {
    // Patient search
    const patientSearch = document.getElementById('patientSearch');
    patientSearch.addEventListener('change', function() {
        currentPatient = this.value;
        loadPatient(currentPatient);
    });

    // Toggle buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('toggle-btn')) {
            const targetId = e.target.getAttribute('data-target');
            toggleSection(targetId, e.target);
        }
    });

    // Print button
    document.getElementById('printBtn').addEventListener('click', function() {
        window.print();
    });

    // Export button
    document.getElementById('exportBtn').addEventListener('click', function() {
        exportPatientData();
    });
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            updateActiveNavLink(this);
        });
    });
}

function updateActiveNavLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleSection(targetId, button) {
    const content = document.getElementById(targetId);
    if (content.style.display === 'none') {
        content.style.display = 'block';
        button.textContent = '−';
    } else {
        content.style.display = 'none';
        button.textContent = '+';
    }
}

function loadPatient(patientId) {
    const patient = patientsData[patientId];
    if (!patient) return;

    loadDemographics(patient);
    loadAllergies(patient);
    loadMedications(patient);
    loadProblems(patient);
    loadVitalSigns(patient);
    loadImmunizations(patient);
    loadProcedures(patient);
    loadSocialHistory(patient);
    updateAlertBadges(patient);
    updateEmergencyContact(patient);
}

function loadDemographics(patient) {
    const demo = patient.demographics;
    
    // Update header
    document.getElementById('patientName').textContent = demo.name;
    document.getElementById('patientAge').textContent = `${demo.age} Jahre`;
    document.getElementById('patientGender').textContent = demo.gender === 'Female' ? 'Weiblich' : 'Männlich';
    document.getElementById('patientDob').textContent = `Geb. ${formatDate(demo.dateOfBirth)}`;
    
    // Update demographics section
    document.getElementById('demoName').textContent = demo.name;
    document.getElementById('demoDob').textContent = formatDate(demo.dateOfBirth);
    document.getElementById('demoGender').textContent = demo.gender === 'Female' ? 'Weiblich' : 'Männlich';
    document.getElementById('demoAge').textContent = `${demo.age} Jahre`;
    document.getElementById('demoAddress').textContent = demo.address;
    document.getElementById('demoPhone').textContent = demo.phone;
    document.getElementById('demoEmail').textContent = demo.email;
}

function loadAllergies(patient) {
    const container = document.getElementById('allergiesList');
    container.innerHTML = '';
    
    if (!patient.allergies || patient.allergies.length === 0) {
        container.innerHTML = '<p>Keine bekannten Allergien</p>';
        return;
    }
    
    patient.allergies.forEach(allergy => {
        const allergyDiv = document.createElement('div');
        allergyDiv.className = `allergy-item ${getSeverityClass(allergy.severity)}`;
        allergyDiv.innerHTML = `
            <div class="allergy-header">
                <span class="allergy-name">${allergy.allergen}</span>
                <span class="status status--${getSeverityStatus(allergy.severity)}">${allergy.severity}</span>
            </div>
            <div class="allergy-details">
                <div class="detail-item">
                    <label>Typ:</label>
                    <span>${allergy.type}</span>
                </div>
                <div class="detail-item">
                    <label>Reaktion:</label>
                    <span>${allergy.reaction}</span>
                </div>
                <div class="detail-item">
                    <label>Letzte Reaktion:</label>
                    <span>${formatDate(allergy.lastReaction)}</span>
                </div>
            </div>
        `;
        container.appendChild(allergyDiv);
    });
}

function loadMedications(patient) {
    const container = document.getElementById('medicationsList');
    container.innerHTML = '';
    
    if (!patient.medications || patient.medications.length === 0) {
        container.innerHTML = '<p>Keine aktuellen Medikamente</p>';
        return;
    }
    
    patient.medications.forEach(medication => {
        const medicationDiv = document.createElement('div');
        medicationDiv.className = 'medication-item';
        medicationDiv.innerHTML = `
            <div class="medication-header">
                <span class="medication-name">${medication.name}</span>
                <span class="medication-dosage">${medication.dosage}</span>
            </div>
            <div class="medication-details">
                <div class="detail-item">
                    <label>Häufigkeit:</label>
                    <span>${medication.frequency}</span>
                </div>
                <div class="detail-item">
                    <label>Startdatum:</label>
                    <span>${formatDate(medication.startDate)}</span>
                </div>
                <div class="detail-item">
                    <label>Verschrieben von:</label>
                    <span>${medication.prescribedBy}</span>
                </div>
                <div class="detail-item">
                    <label>Indikation:</label>
                    <span>${medication.indication}</span>
                </div>
            </div>
        `;
        container.appendChild(medicationDiv);
    });
}

function loadProblems(patient) {
    const container = document.getElementById('problemsList');
    container.innerHTML = '';
    
    if (!patient.problems || patient.problems.length === 0) {
        container.innerHTML = '<p>Keine aktiven Probleme</p>';
        return;
    }
    
    patient.problems.forEach(problem => {
        const problemDiv = document.createElement('div');
        problemDiv.className = 'problem-item';
        problemDiv.innerHTML = `
            <div class="problem-header">
                <span class="problem-name">${problem.problem}</span>
                <span class="icd-code">${problem.icdCode}</span>
            </div>
            <div class="medication-details">
                <div class="detail-item">
                    <label>Status:</label>
                    <span class="status status--${problem.status === 'Aktiv' ? 'warning' : 'info'}">${problem.status}</span>
                </div>
                <div class="detail-item">
                    <label>Diagnosedatum:</label>
                    <span>${formatDate(problem.diagnosedDate)}</span>
                </div>
                <div class="detail-item">
                    <label>Schweregrad:</label>
                    <span>${problem.severity}</span>
                </div>
            </div>
        `;
        container.appendChild(problemDiv);
    });
}

function loadVitalSigns(patient) {
    const vitals = patient.vitalSigns.latest;
    
    // Update latest vitals
    document.getElementById('vitalBP').textContent = vitals.bloodPressure;
    document.getElementById('vitalHR').textContent = vitals.heartRate;
    document.getElementById('vitalTemp').textContent = vitals.temperature;
    document.getElementById('vitalRR').textContent = vitals.respiratoryRate;
    document.getElementById('vitalO2').textContent = vitals.oxygenSaturation;
    document.getElementById('vitalDate').textContent = formatDate(vitals.recordedDate);
    
    // Create chart
    createVitalsChart(patient.vitalSigns.trends);
}

function createVitalsChart(trends) {
    const ctx = document.getElementById('vitalsChart').getContext('2d');
    
    // Destroy existing chart if it exists
    if (vitalsChart) {
        vitalsChart.destroy();
    }
    
    const dates = trends.map(t => formatDate(t.date));
    const systolicData = trends.map(t => t.systolic);
    const diastolicData = trends.map(t => t.diastolic);
    const heartRateData = trends.map(t => t.heartRate);
    
    vitalsChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [
                {
                    label: 'Systolisch',
                    data: systolicData,
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    tension: 0.4
                },
                {
                    label: 'Diastolisch',
                    data: diastolicData,
                    borderColor: '#FFC185',
                    backgroundColor: 'rgba(255, 193, 133, 0.1)',
                    tension: 0.4
                },
                {
                    label: 'Herzfrequenz',
                    data: heartRateData,
                    borderColor: '#B4413C',
                    backgroundColor: 'rgba(180, 65, 60, 0.1)',
                    tension: 0.4,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Blutdruck (mmHg)'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Herzfrequenz (bpm)'
                    },
                    grid: {
                        drawOnChartArea: false,
                    },
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
}

function loadImmunizations(patient) {
    const container = document.getElementById('immunizationsList');
    container.innerHTML = '';
    
    if (!patient.immunizations || patient.immunizations.length === 0) {
        container.innerHTML = '<p>Keine Impfungen verzeichnet</p>';
        return;
    }
    
    patient.immunizations.forEach(immunization => {
        const immunizationDiv = document.createElement('div');
        immunizationDiv.className = 'immunization-item';
        immunizationDiv.innerHTML = `
            <div class="immunization-header">
                <span class="vaccine-name">${immunization.vaccine}</span>
                <span class="status status--success">Verabreicht</span>
            </div>
            <div class="medication-details">
                <div class="detail-item">
                    <label>Datum:</label>
                    <span>${formatDate(immunization.date)}</span>
                </div>
                <div class="detail-item">
                    <label>Hersteller:</label>
                    <span>${immunization.manufacturer}</span>
                </div>
                <div class="detail-item">
                    <label>Chargennummer:</label>
                    <span>${immunization.lotNumber}</span>
                </div>
                <div class="detail-item">
                    <label>Nächste Fälligkeit:</label>
                    <span>${formatDate(immunization.nextDue)}</span>
                </div>
            </div>
        `;
        container.appendChild(immunizationDiv);
    });
}

function loadProcedures(patient) {
    const container = document.getElementById('proceduresList');
    container.innerHTML = '';
    
    if (!patient.procedures || patient.procedures.length === 0) {
        container.innerHTML = '<p>Keine Prozeduren verzeichnet</p>';
        return;
    }
    
    patient.procedures.forEach(procedure => {
        const procedureDiv = document.createElement('div');
        procedureDiv.className = 'procedure-item';
        procedureDiv.innerHTML = `
            <div class="procedure-header">
                <span class="procedure-name">${procedure.procedure}</span>
                <span class="status status--info">Abgeschlossen</span>
            </div>
            <div class="medication-details">
                <div class="detail-item">
                    <label>Datum:</label>
                    <span>${formatDate(procedure.date)}</span>
                </div>
                <div class="detail-item">
                    <label>Durchgeführt von:</label>
                    <span>${procedure.performer}</span>
                </div>
                <div class="detail-item">
                    <label>Standort:</label>
                    <span>${procedure.location}</span>
                </div>
            </div>
        `;
        container.appendChild(procedureDiv);
    });
}

function loadSocialHistory(patient) {
    const container = document.getElementById('socialHistory');
    const social = patient.socialHistory;
    
    container.innerHTML = `
        <div class="social-item">
            <label>Raucherstatus:</label>
            <span>${social.smokingStatus}</span>
        </div>
        <div class="social-item">
            <label>Alkoholkonsum:</label>
            <span>${social.alcoholUse}</span>
        </div>
        <div class="social-item">
            <label>Beruf:</label>
            <span>${social.occupation}</span>
        </div>
        <div class="social-item">
            <label>Sport/Bewegung:</label>
            <span>${social.exerciseFrequency}</span>
        </div>
        <div class="social-item">
            <label>Familienstand:</label>
            <span>${social.maritalStatus}</span>
        </div>
    `;
}

function updateAlertBadges(patient) {
    const container = document.getElementById('alertBadges');
    container.innerHTML = '';
    
    // Check for severe allergies
    const severeAllergies = patient.allergies?.filter(a => 
        a.severity === 'Schwer' || a.severity === 'Lebensbedrohlich'
    );
    
    if (severeAllergies && severeAllergies.length > 0) {
        const badge = document.createElement('span');
        badge.className = 'status status--error';
        badge.textContent = 'Schwere Allergien';
        container.appendChild(badge);
    }
    
    // Check for abnormal vitals (simplified check)
    const vitals = patient.vitalSigns.latest;
    if (vitals.bloodPressure.includes('135') || vitals.bloodPressure.includes('140')) {
        const badge = document.createElement('span');
        badge.className = 'status status--warning';
        badge.textContent = 'Erhöhter Blutdruck';
        container.appendChild(badge);
    }
}

function updateEmergencyContact(patient) {
    const emergency = patient.demographics.emergencyContact;
    document.getElementById('emergencyName').textContent = emergency.name;
    document.getElementById('emergencyRelation').textContent = emergency.relationship;
    document.getElementById('emergencyPhone').textContent = emergency.phone;
    document.getElementById('emergencyPhone').href = `tel:${emergency.phone}`;
}

function getSeverityClass(severity) {
    switch(severity) {
        case 'Lebensbedrohlich':
        case 'Schwer':
            return 'severe';
        case 'Moderat':
            return 'moderate';
        default:
            return '';
    }
}

function getSeverityStatus(severity) {
    switch(severity) {
        case 'Lebensbedrohlich':
        case 'Schwer':
            return 'error';
        case 'Moderat':
            return 'warning';
        default:
            return 'info';
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE');
}

function exportPatientData() {
    const patient = patientsData[currentPatient];
    const dataStr = JSON.stringify(patient, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `patient_${patient.id}_${patient.demographics.name.replace(' ', '_')}.json`;
    link.click();
}