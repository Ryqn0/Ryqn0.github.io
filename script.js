const translations = {
  en: {
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-projects': 'Projects',
    'nav-resume': 'Resume',
    'nav-contact': 'Contact',
    'hero-greeting': "Hello, I'm",
    'hero-title': 'Data Scientist/Analyst & ML/AI Engineer',
    'hero-description': 'Newly graduated with an engineering degree and passionate about Data and AI.',
    'hero-btn-projects': 'View Projects',
    'hero-btn-contact': 'Contact Me',
    'about-title': 'About Me',
    'about-p1': 'I am passionate about data science and particularly interested in Machine Learning, I recently graduated from an Engineering School as a Data Scientist. I spend some free times doing Kaggle Competitions and recently went up a notch and trying to do MLOPS projects while doing the competitions because I am interested in deploying apps for predictions or any other ML applications.',
    'about-p2': 'During projects, I used a lot of ML frameworks like scikit-learn, TensorFlow, and PyTorch. I used data visualization tools like Pandas, Matplotlib and Seaborn. I also used tools for MLOPS such as MLFlow, Docker and Github Actions and deployed on Cloud Services using FastAPI, GCP.',
    'about-stat-graduated': 'Graduated',
    'about-stat-projects': 'Project completed',
    'about-stat-internship': 'Internship',
    'about-stat-exchange': 'Exchange Semester',
    'projects-title': 'Projects',
    'project-churn-title': 'Customer Churn Prediction API',
    'project-status-done': 'Completed',
    'project-churn-description': 'An end-to-end MLOps pipeline for predicting customer churn, built during a Kaggle competition. Includes model training, experiment tracking, and deployment as a REST API on cloud services.',
    'project-irrigation-title': 'Irrigation Need Prediction API',
    'project-fraud-title': 'Real-Time Fraud Detection MLOps Pipeline',
    'project-fraud-description': 'An end-to-end MLOps pipeline for real-time fraud detection on GCP. Transactions stream through Pub/Sub into a LightGBM scoring service on Cloud Run, with BigQuery as the analytical layer for rolling-velocity features and a time-aware train/test split to prevent leakage. Includes statistical drift monitoring (KS & chi-squared) wired into Cloud Monitoring alerts, MLflow experiment tracking, 21 unit and behavioural tests, and full CI/CD via GitHub Actions that auto-deploys both ingest and inference services on merge to main.',
    'project-status-wip': 'In Progress',
    'project-irrigation-description': 'End to end MLOps pipeline for predicting irrigation needs (multi-class). Currently in progress.',
    'resume-title': 'Resume',
    'resume-download': 'Download CV',
    'contact-title': 'Contact',
    'contact-description': "I'm currently open to new opportunities and collaborations. Feel free to reach out!",
    'footer-content-copyrights': '© 2026 Ryan DUNG. All rights reserved.',
  },
  fr: {
    'nav-home': 'Accueil',
    'nav-about': 'À propos',
    'nav-projects': 'Projets',
    'nav-resume': 'CV',
    'nav-contact': 'Contact',
    'hero-greeting': "Bonjour, je suis",
    'hero-title': 'Data Scientist/Analyste & Ingénieur ML/IA',
    'hero-description': "Diplômé d'une école d'ingénieurs et passionné par la Data et l'IA.",
    'hero-btn-projects': 'Voir mes projets',
    'hero-btn-contact': 'Me contacter',
    'about-title': 'À propos de moi',
    'about-p1': "Je suis passionné par la data science et particulièrement intéressé par le Machine Learning. Récemment diplômé d'une école d'ingénieurs en tant que Data Scientist, je participe à des compétitions Kaggle et travaille sur des projets MLOps pour déployer des applications de prédiction.",
    'about-p2': "Durant mes projets, j'ai utilisé des frameworks ML comme scikit-learn, TensorFlow et PyTorch, ainsi que des outils de visualisation comme Pandas, Matplotlib et Seaborn. J'ai également utilisé MLFlow, Docker, Github Actions et déployé sur GCP avec FastAPI.",
    'about-stat-graduated': 'Diplômé',
    'about-stat-projects': 'Projet réalisé',
    'about-stat-internship': 'Stage',
    'about-stat-exchange': 'Semestre à l\'étranger',
    'projects-title': 'Projets',
    'project-churn-title': 'API de Prédiction du Taux de Désabonnement',
    'project-status-done': 'Terminé',
    'project-churn-description': "Pipeline MLOps de bout en bout pour prédire le churn client, développé lors d'une compétition Kaggle. Comprend l'entraînement du modèle, le suivi des expériences et le déploiement en tant qu'API sur des services cloud.",
    'project-irrigation-title': "API de Prédiction des Besoins en Irrigation",
    'project-status-wip': 'En cours',
    'project-irrigation-description': "Pipeline MLOps de bout en bout pour prédire les besoins en irrigation (multi-classe). Projet actuellement en cours de développement.",
    'project-fraud-title': 'Pipeline MLOps de Détection de Fraude en Temps Réel',
    'project-fraud-description': "Pipeline MLOps de bout en bout pour détecter les fraudes en temps réel sur GCP. Les transactions s'écoulent via Pub/Sub vers un service de notation LightGBM sur Cloud Run, avec BigQuery comme couche analytique pour les fonctionnalités de vitesse glissante et une division entraînement/test temporelle pour éviter le leakage. Inclut le suivi des écarts statistiques (KS & chi-squared) intégré aux alertes Cloud Monitoring, le suivi des expériences MLflow, 21 tests unitaires et comportementaux, et un CI/CD complet via GitHub Actions qui déploie automatiquement les services d'ingestion et d'inférence sur merge vers main.",
    'resume-title': 'CV',
    'resume-download': 'Télécharger le CV',
    'contact-title': 'Contact',
    'contact-description': "Je suis actuellement à la recherche de nouvelles opportunités. N'hésitez pas à me contacter !",
    'footer-content-copyrights': '© 2026 Ryan DUNG. Tous droits réservés.',
  }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'fr' : 'en'; // Toggle between English and French

    document.getElementById('langToggle').textContent = currentLang === 'en' ? 'FR' : 'EN'; // Update button text
    document.documentElement.lang = currentLang; // Update the lang attribute of the HTML element

    // Update all elements with data-key attribute
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key'); // Get the translation key
        // Update the text content if the translation exists for the current language
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key]; // Update text content with the translation
        }
    });

    const iframe = document.querySelector('.resume-embed'); // Get the iframe element
    const downloadbtn = document.querySelector('[data-key="resume-download"]'); // Get the download button element
    const cvFile = currentLang === 'fr' ? 'CV_RYAN_DUNG_FR.pdf' : 'CV_RYAN_DUNG_EN.pdf'; // Determine the CV file based on the current language
    iframe.src = cvFile + '#zoom=100'; // Update the iframe source to the appropriate CV file
    downloadbtn.href = cvFile; // Update the download button href to the appropriate CV file
}