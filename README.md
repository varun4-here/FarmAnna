# FarmAnna - Smart Farming Assistant

# Overview

AI-powered farming assistant for crop disease detection using a CNN model. Upload leaf images to get instant disease identification and treatment recommendations. Built with FastAPI, TensorFlow, PostgreSQL, and React. 🚜


## Features
- **Crop Disease Detection**: Upload images of infected leaves, and the system identifies the disease using a CNN model.
- **Treatment Recommendations**: Provides suggestions based on the identified disease.
- **User-Friendly Web Platform**: Simple sign-up, mobile-friendly UI, and an intuitive dashboard.

## Tech Stack
### **AI/ML for Disease Detection**
- **TensorFlow/Keras** – Deep learning framework for training the CNN model.
- **OpenCV & Pillow** – Image preprocessing and enhancement.
- **FastAPI** – High-performance API server for ML model integration.

### **Backend**
- **FastAPI** – Lightweight and fast backend framework.
- **PostgreSQL** – Database for storing user data and disease reports.
- **Redis** – Caching mechanism for improved performance.
- **Cloud Storage (AWS S3/Backblaze B2)** – For storing uploaded images.

### **Frontend**
- **React.js** – Modern, fast UI framework.
- **Tailwind CSS** – Utility-first CSS framework for styling.

### **Deployment & DevOps**
- **Docker** – Containerized deployment.
- **NGINX + Gunicorn** – API and backend hosting.
- **GitHub Actions** – CI/CD pipeline for seamless updates.
- **AWS/GCP (Free Tier)** – Scalable deployment options.

## Future Enhancements
- **Multilingual Support** – Expanding accessibility for farmers in different regions.
- **Offline Mode** – Android app with offline capabilities.
- **IoT Integration** – Smart sensors for real-time farm monitoring.

## Working to add Capabilities
FarmAnna also looking to incorporate **Geospatial Analysis** and **LLM Agents** for enhanced insights.
