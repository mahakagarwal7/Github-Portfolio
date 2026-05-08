# 📽️ BharatVidya

<div align="center">
  <img src="https://via.placeholder.com/800x400?text=AI-Powered+Educational+Content+Generation" alt="BharatVidya Banner" width="100%" />
  
  <br />

  ![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
  ![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white)
  ![Ollama](https://img.shields.io/badge/Ollama-000000?style=flat)
</div>

## 📖 Overview
An AI-powered educational content generation platform designed for low-connectivity and rural environments, converting text into lightweight educational videos.

## ❓ Why This Project?
Millions of students in rural areas lack access to high-quality digital content and stable internet. BharatVidya solves this by generating **text-to-video content** with multilingual TTS, optimized for low-end Android devices and offline viewing.

## ✨ Key Features
- **Automated Video Pipeline**: Converts text scripts into synchronized videos with subtitles.
- **Multilingual TTS**: Edge-TTS integration for natural-sounding audio in multiple regional languages.
- **Lightweight Rendering**: optimized MoviePy pipelines for generating small-file-size educational content.
- **Edge Inference**: Supports local LLM content generation via Ollama (Phi-3 Mini).

## 🏗️ Architecture
- **Content Engine**: LLM-driven script generation and summarization.
- **Media Engine**: MoviePy for video composition and Edge-TTS for audio.
- **Delivery**: Optimized for low-bandwidth environments with progressive download support.

## 🗺️ Roadmap
- [x] Multilingual text-to-video baseline
- [x] Support for low-end device rendering
- [ ] Community-driven content moderation
- [ ] Integration with government education portals
