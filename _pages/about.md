---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div class="hero-section" style="text-align: center; padding: 2em 0;">
  <h1 style="font-weight: 300; margin-bottom: 0.5em;">Jackson Small</h1>
  <p style="font-size: 1.2em; color: #666; margin: 0.5em 0;">
    ML Engineer • Healthcare AI Researcher • Data Science @ UCF Honors
  </p>

  <!-- Impact Metrics -->
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2em; margin: 3em 0; max-width: 800px; margin-left: auto; margin-right: auto;">
    <div>
      <div style="font-size: 3em; font-weight: bold; color: #2c5f2d;">$700K</div>
      <div style="color: #666;">Cost Avoidance</div>
    </div>
    <div>
      <div style="font-size: 3em; font-weight: bold; color: #2c5f2d;">97%</div>
      <div style="color: #666;">Published Research</div>
    </div>
    <div>
      <div style="font-size: 3em; font-weight: bold; color: #2c5f2d;">17x</div>
      <div style="color: #666;">Velocity Gains</div>
    </div>
  </div>

  <!-- CTAs -->
  <div style="margin: 2em 0;">
    <a href="/files/cv.pdf" class="btn btn--primary btn--large" download style="margin: 0.5em;">
      <i class="fas fa-download"></i> Download Resume
    </a>
    <a href="https://github.com/jacksonSmall" class="btn btn--inverse btn--large" style="margin: 0.5em;">
      <i class="fab fa-github"></i> View GitHub
    </a>
  </div>
</div>

---

## Featured Work

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2em; margin: 2em 0;">

  <!-- Card 1: Enterprise Impact -->
  <div style="border: 1px solid #ddd; border-radius: 8px; padding: 1.5em; text-align: center;">
    <div style="font-size: 3em; margin-bottom: 0.3em;">💰</div>
    <h3 style="margin-top: 0;">Enterprise ML Engineering</h3>
    <p>Deployed RAG/LLM prototypes and Python automation achieving $700,000 in cost avoidance with 17x faster migration velocity at Insurity. Built HIPAA-compliant audit infrastructure for 23 PHI tables.</p>
    <a href="/experience/" class="btn btn--small">View Details →</a>
  </div>

  <!-- Card 2: Published Research -->
  <div style="border: 1px solid #ddd; border-radius: 8px; padding: 1.5em; text-align: center;">
    <div style="font-size: 3em; margin-bottom: 0.3em;">🧠</div>
    <h3 style="margin-top: 0;">Published Thesis Research</h3>
    <p>CNN-based EEG seizure detection with Lipschitz stability analysis. 97% accuracy, 0.99 AUC. Published in UCF STARS Repository with mathematical rigor bridging theory and application.</p>
    <a href="/portfolio/thesis/" class="btn btn--small">Read Paper →</a>
  </div>

  <!-- Card 3: Telematics Platform -->
  <div style="border: 1px solid #ddd; border-radius: 8px; padding: 1.5em; text-align: center;">
    <div style="font-size: 3em; margin-bottom: 0.3em;">🚗</div>
    <h3 style="margin-top: 0;">AI Risk Scoring Platform</h3>
    <p>End-to-end telematics platform with real-time Streamlit dashboard. 0.98 ROC-AUC, 47 engineered features, gamification system. Complete ML pipeline from simulation to deployment.</p>
    <a href="/portfolio/telematics/" class="btn btn--small">View Demo →</a>
  </div>

</div>

---

## Technical Skills

<div style="display: flex; flex-wrap: wrap; gap: 0.5em; margin: 1.5em 0;">
  <span style="background: #e8f5e9; padding: 0.5em 1em; border-radius: 20px; font-size: 0.9em;">Python</span>
  <span style="background: #e8f5e9; padding: 0.5em 1em; border-radius: 20px; font-size: 0.9em;">PyTorch</span>
  <span style="background: #e8f5e9; padding: 0.5em 1em; border-radius: 20px; font-size: 0.9em;">SQL</span>
  <span style="background: #e8f5e9; padding: 0.5em 1em; border-radius: 20px; font-size: 0.9em;">Azure AI</span>
  <span style="background: #e8f5e9; padding: 0.5em 1em; border-radius: 20px; font-size: 0.9em;">RAG/LLMs</span>
  <span style="background: #e8f5e9; padding: 0.5em 1em; border-radius: 20px; font-size: 0.9em;">SPARK</span>
  <span style="background: #e8f5e9; padding: 0.5em 1em; border-radius: 20px; font-size: 0.9em;">Streamlit</span>
  <span style="background: #e8f5e9; padding: 0.5em 1em; border-radius: 20px; font-size: 0.9em;">Power BI</span>
  <span style="background: #e8f5e9; padding: 0.5em 1em; border-radius: 20px; font-size: 0.9em;">TensorFlow</span>
  <span style="background: #e8f5e9; padding: 0.5em 1em; border-radius: 20px; font-size: 0.9em;">Scikit-learn</span>
  <span style="background: #e8f5e9; padding: 0.5em 1em; border-radius: 20px; font-size: 0.9em;">R</span>
  <span style="background: #e8f5e9; padding: 0.5em 1em; border-radius: 20px; font-size: 0.9em;">Git</span>
</div>

**Sample: Lipschitz Bound Calculation (Thesis Research)**

```python
def compute_lipschitz_bound(layer_weights, activation='relu'):
    """
    Theoretical stability analysis for CNN layers
    Ensures robust predictions under EEG signal noise
    """
    spectral_norm = torch.svd(layer_weights)[1].max()
    K_activation = 1.0 if activation == 'relu' else 2.0
    return spectral_norm * K_activation  # K_model ≤ 1.5 achieved
```

<details>
<summary><strong>View Full Tech Stack →</strong></summary>

**Languages:** Python • SQL • R • JavaScript • Julia • C • Bash • PowerShell

**ML/DL Frameworks:** PyTorch • TensorFlow • Scikit-learn • SMOTE • Statsmodels

**Data Engineering:** SPARK • Azure DevOps • AWS • Git • ETL Pipelines

**Analytics & BI:** Power BI • Streamlit • Plotly • Tableau • Excel

**Core Competencies:** LLMs/RAG • A/B Testing • Statistical Modeling • Predictive Analytics

**Development Tools:** Jupyter • VS Code • Docker • Hyprland (Arch Linux)

</details>

---

## Recent Work

<div style="text-align: center; margin: 2em 0;">
  <img src="https://github-readme-stats.vercel.app/api?username=jacksonSmall&show_icons=true&theme=default&hide_border=true" alt="GitHub Stats" />
</div>

**Active Projects:** [Seizure Detection Thesis](https://github.com/jacksonSmall/seizure-detection-thesis) • [Telematics Platform](https://github.com/jacksonSmall/Small_Jackson_TelematicsInsurance) • [Shopper Behavior Analysis](https://github.com/jacksonSmall/shopper-behavior-analysis)

---

## Let's Connect

<div style="text-align: center; margin: 3em 0; padding: 2em; background-color: #f8f9fa; border-radius: 8px;">
  <h3>Seeking ML Engineering & Healthcare AI Roles</h3>
  <p style="font-size: 1.1em; margin: 1em 0; max-width: 600px; margin-left: auto; margin-right: auto;">
    I'm seeking roles where statistical rigor meets production impact. As an Epilepsy Foundation Ambassador, I'm especially passionate about medical AI applications.
  </p>

  <div style="margin: 1.5em 0;">
    <a href="mailto:jacksonSmall@ucf.edu" class="btn btn--primary" style="margin: 0.5em;">
      <i class="fas fa-envelope"></i> Email Me
    </a>
    <a href="https://www.linkedin.com/in/jackson-small-ds" class="btn btn--info" style="margin: 0.5em;">
      <i class="fab fa-linkedin"></i> LinkedIn
    </a>
    <a href="https://github.com/jacksonSmall" class="btn btn--inverse" style="margin: 0.5em;">
      <i class="fab fa-github"></i> GitHub
    </a>
    <a href="/files/cv.pdf" class="btn btn--primary" download style="margin: 0.5em;">
      <i class="fas fa-download"></i> Resume
    </a>
  </div>
</div>
