# 🆘 GenZenith

<div align="center">
  <img src="https://via.placeholder.com/800x400?text=AI-Powered+Crisis+Response+Platform" alt="GenZenith Banner" width="100%" />
  
  <br />

  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
  ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
  ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black)
  ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white)
</div>

## 📖 Overview
An AI-powered NGO crisis response and volunteer intelligence platform that converts unstructured humanitarian requests (WhatsApp, images, forms) into actionable emergency workflows.

## ❓ Why This Project?
During crises, communication is often chaotic. GenZenith uses **NLP and OCR** to structure data from multiple channels, ensuring that relief efforts are prioritized and volunteers are matched efficiently based on proximity and skill.

## ✨ Key Features
- **Multimodal Ingestion**: Converts WhatsApp messages and images into structured data via Google Vision API.
- **NLP Extraction**: Uses spaCy to classify humanitarian needs and extract locations.
- **Intelligent Matching**: Ranking system for volunteers based on proximity, workload, and availability.
- **Real-time Command Center**: Live dashboards for NGOs to track incident status and resource allocation.
- **Automated Communication**: Integrated Twilio workflows for instant alerts and updates.

## 🏗️ Architecture
- **Frontend**: Next.js/React with Tailwind CSS for high-performance dashboards.
- **Serverless**: Supabase Edge Functions for OCR/NLP processing.
- **Real-time Database**: Firebase for instant state synchronization across disaster sites.

## 🗺️ Roadmap
- [x] WhatsApp to workflow ingestion pipeline
- [x] Volunteer matching algorithm (v1)
- [ ] Offline-first mobile app for field responders
- [ ] Predictive forecasting for resource allocation
