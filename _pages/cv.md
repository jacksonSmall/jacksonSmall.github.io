---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<!-- Custom CSS -->
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/custom.css">

## Education

**University of Central Florida** — M.S. in Statistics and Data Science (Fall 2026 – Expected May 2028)
- Graduate Teaching Assistant (20 hrs/week)
- Full tuition remission + health insurance

**University of Central Florida, Burnett Honors College** — B.S. in Data Science, Minor in Statistics (May 2026)
- GPA: 3.83
- Burnett Honors College Scholar

---

## Undergraduate Research

**Undergraduate Researcher, UCF AIM Lab (AI & Imaging in Medicine)** (March 2026 – Present)
- Developing a novel anomaly *prediction* system using autoregressive video generation (Wan 2.2, 14B parameters), the first approach applying video generation models to prediction rather than detection, confirmed by full literature review
- Architecture feeds N surveillance frames into a Wan 2.2 image-to-video model to predict future frames; divergence between prediction and observed reality produces a rolling anomaly probability score that triggers an alert above a 65% confidence threshold
- Evaluating against the UCF-Crime dataset (1,900 videos, 128 hours, 13 anomaly categories, baseline AUC 75.41) on the UCF Newton HPC cluster (90 H100 80GB GPUs, SLURM), introducing Time-to-Event lead time and Anticipation AUC as novel evaluation metrics

**Honors Undergraduate Thesis** (Summer – Fall 2025)
- *"Theoretical Analysis of CNNs for Automatic Seizure Detection in EEG Signals"*
- **First Data Science undergraduate to publish in UCF STARS Honors Undergraduate Thesis repository**
- Published: [stars.library.ucf.edu/hut2024/462](https://stars.library.ucf.edu/hut2024/462)
- Advised by Dr. Chudamani Poudyal (SDMSS, UCF)
- Results: 97% accuracy, 0.99 AUC, Lipschitz stability bounds (L = 24.72)
- Poster presentations: Burnett Honors College Family Weekend (Sep 2025), Student Scholar Symposium (Mar 2026)

---

## Industry Experience

**AI Associate Developer, Insurity Inc.** (October 2025 – August 2026, Remote)
- Directed AI coding agents (Claude, Replit) as sole engineer across six production workstreams on a .NET/SQL enterprise claims platform, delivering 37,600+ net lines of C#, SQL, and Python across 11 months with full architectural ownership and review of all generated output
- Migrated 175 enterprise reports to Power BI across 6 business lines in 3 weeks vs. 3–4 month projection, parsing 264,000+ lines of XML to apply 1,225 modifications across 187 database connections with a 100% verification pass rate, zero production incidents, and $700,000 cost avoidance
- Architected dual-layer HIPAA audit system covering 23 PHI tables (9,594 lines C# + SQL) with dynamic SQL triggers cutting per-record storage 85–96% (1,745 to 186 bytes) and eliminating 280+ lines of static code per table; 5-step username resolution chain, 3-tier RBAC, field masking
- Built a Roslyn static analysis tool that parsed a legacy C# codebase into a type-resolved inventory of every data-layer call site, then drove a Python codemod that automated the refactor across all matched sites
- Delivered an enterprise document-storage integration in 22 days vs. 3–6 month industry standard using provider-pattern architecture with three interchangeable backends, OAuth2 client-credentials lifecycle management, and DualWrite zero-downtime migration, validated by 234 automated tests across 16 REST API route families

**Research Assistant (Data Science) Intern, Design Interactive Inc.** (May – Aug 2024, Part-Time)
- Built automated data validation pipelines in Python + SQL for large human-systems research datasets
- Led QA on VR/AR Unity simulations; deployed builds to hardware; validated eye-tracking software for participant gaze capture
- Conducted statistical analysis on behavioral data; led pilot studies (~300 participants)

---

## Projects

**DataSci-Coder** (Spring 2026)
- Fine-tuned Qwen2.5-Coder-14B via QLoRA on 10,795 curated data science examples spanning statistics, ML, and deep learning
- Training: L40S GPU, 1.9 hours, QLoRA r=16 alpha=32, 4-bit quantization
- Results: 93.3% instruction compliance vs 91.4% base (+1.9%), 10/10 code-only output vs 6/10 base, 100% code ratio vs 87.9% base (+12.1%)
- HuggingFace: [jsmall12/DataSci-Coder-14B-LoRA](https://huggingface.co/jsmall12/DataSci-Coder-14B-LoRA) | GitHub: [jacksonSmall/DataSci-Coder](https://github.com/jacksonSmall/DataSci-Coder)

**Virtual Patient UCF × ITESM** (Spring 2026)
- Capstone project (UCF + Tecnologico de Monterrey, team of 6) testing whether video-structured AI context improves automated medical communication training
- 3 experiments: A/B testing 40 OSCE transcripts, 6-dimension rubric scorer (emotional attunement, naturalness, nonverbal responsiveness, phase appropriateness, medical relevance, response quality)
- Benchmarked Llama 3.1 8B / BioMistral 7B / Qwen 2.5 7B; median 5.9s response latency, instant feedback

**Neuro-Wave Analytics** (Fall 2025)
- Bayesian Physics-Informed Graph Neural Network for seizure propagation modeling across EEG electrode networks
- Uncertainty quantification; PyTorch Geometric; extension of honors thesis work

**AI Driver Risk Scoring Platform** (Fall 2025)
- End-to-end driver risk assessment from telematics data; 47 engineered behavioral risk features
- ROC-AUC 0.98; real-time Streamlit dashboard with interactive Plotly maps, SHAP feature importance, gamification rewards

---

## Skills

**Languages:** Python, R, SQL, Julia, Bash, JavaScript

**ML & Deep Learning:** PyTorch, TensorFlow, Scikit-learn, XGBoost, PyTorch Geometric, QLoRA/PEFT, Hugging Face Transformers, SMOTE

**Data Science:** Pandas, NumPy, SciPy, Statsmodels, Matplotlib, Seaborn, Plotly, SHAP

**LLM & NLP:** RAG systems, LLM fine-tuning, prompt engineering, Anthropic/OpenAI/Azure APIs, open-source LLMs (Llama, Qwen, BioMistral)

**Statistics & Methods:** Time Series, Survival Analysis, Stochastic Processes, Bayesian Methods, Multivariate Analysis, Signal Processing, A/B Testing, Cross-Validation

**Tools & Cloud:** Azure, AWS, Docker, Git/GitHub, FastAPI, Streamlit, Power BI, SLURM/HPC

---

## Leadership & Certifications

**Campus & Community**
- CRU at UCF — Youth Group Leader & Worship Musician (Fall 2022 – Spring 2026)
- Pegasus Math Club — STEM Day presenter (2023)
- AMS Spring Southeastern Sectional Meeting, FSU (March 2024)

**Honors & Recognition**
- Burnett Honors College Scholar, UCF
- BSA Eagle Scout (2020 – Present)
- Epilepsy Foundation Ambassador (2019 – Present)

**Certifications**
- Microsoft Azure AI Essentials (December 2025)
- Anaconda Python for Data Science (December 2025)

---

## Publications

Small, J. T. (2025). *Theoretical Analysis of CNNs for Automatic Seizure Detection in EEG Signals*. UCF STARS Honors Undergraduate Theses, No. 462. [https://stars.library.ucf.edu/hut2024/462](https://stars.library.ucf.edu/hut2024/462)
