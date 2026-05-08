# 🧬 DiffuCat

<div align="center">
  <img src="https://via.placeholder.com/800x400?text=DiffuCat+Scientific+AI+Interface" alt="DiffuCat Banner" width="100%" />
  
  <br />

  ![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
  ![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat&logo=pytorch&logoColor=white)
  ![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white)
  ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
</div>

## 📖 Overview
An uncertainty-aware AI platform for catalyst discovery, leveraging Graph Neural Networks (GNNs) and Diffusion Models to accelerate the development of materials for carbon capture and green chemistry.

## ❓ Why This Project?
Traditional catalyst discovery is slow and resource-intensive. DiffuCat automates the molecular generation process while providing **uncertainty estimation**, ensuring that researchers can prioritize high-confidence candidates before expensive lab validation.

## ✨ Key Features
- **Molecular Generation**: End-to-end pipeline using SchNet-based GNNs and Diffusion models.
- **Uncertainty-Aware Prediction**: Monte Carlo Dropout integration for property prediction confidence scoring.
- **Pareto Candidate Ranking**: Multi-objective optimization for identifying the best molecular candidates.
- **Interactive Visualization**: React-based frontend for real-time molecule exploration and experimentation.
- **Production Infrastructure**: Scalable backend with vector databases, MLflow for experiment tracking, and DVC for data versioning.

## 🏗️ Architecture
The system follows a modular microservices architecture:
1. **Inference Engine**: PyTorch-based GNNs and Diffusion models for molecule generation.
2. **API Layer**: FastAPI backend managing task queues and data retrieval.
3. **Storage**: PostgreSQL for metadata and Vector Databases for semantic molecular search.
4. **Orchestration**: MLflow and DVC for reproducible research pipelines.

## 🗺️ Roadmap
- [x] Initial GNN property prediction model
- [x] Diffusion-based generative pipeline integration
- [ ] Kubernetes deployment for distributed inference
- [ ] Integration with real-time laboratory feedback loops
