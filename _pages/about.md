---
permalink: /
title: "About Me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<!-- Custom CSS -->
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/custom.css">

<div class="hero-section" style="text-align: center; padding: 2em 0;">
  <h1 style="font-weight: 300; margin-bottom: 0.5em;">Jackson Small</h1>
  <p style="font-size: 1.2em; color: #666; margin: 0.5em 0;">
    Data Scientist • AI Researcher • UCF M.S. Statistics & Data Science (Fall 2026)
  </p>

  <!-- Impact Metrics with Animation IDs -->
  <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 2em; margin: 3em 0; max-width: 1000px; margin-left: auto; margin-right: auto;">
    <div>
      <div id="metric-gpa" class="metric-value" style="font-size: 3em; font-weight: bold; color: #2c5f2d;">3.83</div>
      <div style="color: #666;">GPA Senior</div>
    </div>
    <div>
      <div id="metric-cost" class="metric-value" style="font-size: 3em; font-weight: bold; color: #2c5f2d;">$700K</div>
      <div style="color: #666;">Cost Avoidance</div>
    </div>
    <div>
      <div id="metric-paper" class="metric-value" style="font-size: 3em; font-weight: bold; color: #2c5f2d;">1</div>
      <div style="color: #666;">Paper Published</div>
    </div>
    <div>
      <div class="metric-value" style="font-size: 2em; font-weight: bold; color: #2c5f2d; line-height: 1.2;">1st DS Undergrad</div>
      <div style="color: #666;">UCF STARS HUT</div>
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
  <div class="featured-card" style="border: 1px solid #ddd; border-radius: 8px; padding: 1.5em; text-align: center;">
    <div style="font-size: 3em; margin-bottom: 0.3em;">💰</div>
    <h3 style="margin-top: 0;">Enterprise ML Engineering</h3>
    <p>Deployed RAG/LLM prototypes and Python automation achieving $700,000 in cost avoidance with 17x faster migration velocity at Insurity. Built HIPAA-compliant audit infrastructure for 23 PHI tables.</p>
    <a href="/experience/" class="btn btn--small">View Details →</a>
  </div>

  <!-- Card 2: Published Research -->
  <div class="featured-card" style="border: 1px solid #ddd; border-radius: 8px; padding: 1.5em; text-align: center;">
    <div style="font-size: 3em; margin-bottom: 0.3em;">🧠</div>
    <h3 style="margin-top: 0;">Published Thesis Research</h3>
    <p>CNN-based EEG seizure detection with Lipschitz stability analysis (L = 24.72). 97% accuracy, 0.99 AUC. Published in UCF STARS Repository with mathematical rigor bridging theory and application.</p>
    <a href="/portfolio/thesis/" class="btn btn--small">Read Paper →</a>
  </div>

  <!-- Card 3: Telematics Platform -->
  <div class="featured-card" style="border: 1px solid #ddd; border-radius: 8px; padding: 1.5em; text-align: center;">
    <div style="font-size: 3em; margin-bottom: 0.3em;">🚗</div>
    <h3 style="margin-top: 0;">AI Risk Scoring Platform</h3>
    <p>End-to-end telematics platform with real-time Streamlit dashboard. 0.98 ROC-AUC, 47 engineered features, gamification system. Complete ML pipeline from simulation to deployment.</p>
    <a href="/portfolio/telematics/" class="btn btn--small">View Demo →</a>
  </div>

  <!-- Card 4: DataSci-Coder -->
  <div class="featured-card" style="border: 1px solid #ddd; border-radius: 8px; padding: 1.5em; text-align: center;">
    <div style="font-size: 3em; margin-bottom: 0.3em;">🤖</div>
    <h3 style="margin-top: 0;">DataSci-Coder LLM</h3>
    <p>Fine-tuned Qwen2.5-Coder-14B via QLoRA on 10,795 DS examples. 93.3% instruction compliance vs 91.4% base, 10/10 code-only output vs 6/10 base. Published on HuggingFace (~40 downloads).</p>
    <a href="/portfolio/datasci-coder/" class="btn btn--small">View Project →</a>
  </div>

  <!-- Card 5: Research -->
  <div class="featured-card" style="border: 1px solid #ddd; border-radius: 8px; padding: 1.5em; text-align: center;">
    <div style="font-size: 3em; margin-bottom: 0.3em;">🔬</div>
    <h3 style="margin-top: 0;">Research Project</h3>
    <p>Active research project at UCF. Details coming soon.</p>
    <a href="/portfolio/aim-lab/" class="btn btn--small">Coming Soon →</a>
  </div>

</div>

---

## Impact Metrics

<div class="impact-chart">
  <div class="impact-item">
    <div class="impact-label">
      <span>Cost Avoidance</span>
      <span><strong>$700,000</strong></span>
    </div>
    <div style="background: #f0f0f0; border-radius: 5px; overflow: hidden;">
      <div class="impact-bar" data-width="100%" style="width: 0%;"></div>
    </div>
  </div>

  <div class="impact-item">
    <div class="impact-label">
      <span>Seizure Detection Accuracy</span>
      <span><strong>97%</strong></span>
    </div>
    <div style="background: #f0f0f0; border-radius: 5px; overflow: hidden;">
      <div class="impact-bar" data-width="97%" style="width: 0%;"></div>
    </div>
  </div>

  <div class="impact-item">
    <div class="impact-label">
      <span>Telematics Platform ROC-AUC</span>
      <span><strong>0.98</strong></span>
    </div>
    <div style="background: #f0f0f0; border-radius: 5px; overflow: hidden;">
      <div class="impact-bar" data-width="98%" style="width: 0%;"></div>
    </div>
  </div>

  <div class="impact-item">
    <div class="impact-label">
      <span>Migration Velocity Improvement</span>
      <span><strong>17x Faster</strong></span>
    </div>
    <div style="background: #f0f0f0; border-radius: 5px; overflow: hidden;">
      <div class="impact-bar" data-width="85%" style="width: 0%;"></div>
    </div>
  </div>
</div>

---

## Technical Skills

<h3 style="margin-top: 2em;">Core Technologies</h3>

<div style="text-align: center; margin: 2em 0;">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" class="tech-logo" alt="Python" title="Python" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" class="tech-logo" alt="PyTorch" title="PyTorch" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" class="tech-logo" alt="TensorFlow" title="TensorFlow" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" class="tech-logo" alt="SQL" title="SQL" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" class="tech-logo" alt="Azure" title="Azure AI" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" class="tech-logo" alt="R" title="R" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" class="tech-logo" alt="Git" title="Git" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" class="tech-logo" alt="Docker" title="Docker" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/archlinux/archlinux-original.svg" class="tech-logo" alt="Arch Linux" title="Arch Linux" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" class="tech-logo" alt="Jupyter" title="Jupyter" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" class="tech-logo" alt="VS Code" title="VS Code" />
</div>

<h3>Specialized Skills</h3>

<div style="display: flex; flex-wrap: wrap; gap: 0.5em; margin: 1.5em 0; justify-content: center;">
  <span class="skill-badge">RAG/LLMs</span>
  <span class="skill-badge">QLoRA/PEFT</span>
  <span class="skill-badge">HuggingFace Transformers</span>
  <span class="skill-badge">PyTorch Geometric</span>
  <span class="skill-badge">SPARK</span>
  <span class="skill-badge">Streamlit</span>
  <span class="skill-badge">Power BI</span>
  <span class="skill-badge">Scikit-learn</span>
  <span class="skill-badge">SMOTE</span>
  <span class="skill-badge">Statistical Modeling</span>
  <span class="skill-badge">A/B Testing</span>
  <span class="skill-badge">Time Series</span>
  <span class="skill-badge">HIPAA Compliance</span>
</div>

**Sample: Lipschitz Bound Estimation (Thesis Research)**

```python
def estimate_lipschitz(model):
    """
    Estimates Lipschitz constant of CNN by computing spectral norms
    Best model achieved L = 24.72 (B vs. E classification)
    """
    norms = []
    for layer in model.modules():
        if isinstance(layer, (nn.Conv1d, nn.Linear)):
            w = layer.weight.detach().cpu().numpy().reshape(layer.weight.shape[0], -1)
            s = np.linalg.svd(w, compute_uv=False)
            norms.append(np.max(s))
    L_hat = np.prod(norms)
    return L_hat, norms
```

<details markdown="1">
<summary><strong>View Full Tech Stack →</strong></summary>

**Languages:** Python • SQL • R • JavaScript • Julia • C • Bash • PowerShell

**ML/DL Frameworks:** PyTorch • TensorFlow • Scikit-learn • SMOTE • Statsmodels • QLoRA/PEFT • HuggingFace Transformers • PyTorch Geometric

**Data Engineering:** SPARK • Azure DevOps • AWS • Git • ETL Pipelines

**Analytics & BI:** Power BI • Streamlit • Plotly • Tableau • Excel

**Core Competencies:** LLMs/RAG • A/B Testing • Statistical Modeling • Predictive Analytics

**Development Tools:** Jupyter • VS Code • Docker • Hyprland (Arch Linux)

</details>

<h3 style="text-align: center; margin-top: 3em;">Skills Proficiency</h3>

<div style="max-width: 600px; margin: 2em auto; padding: 2em; background: linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%); border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border-left: 4px solid #8B5CF6;">
  <canvas id="skillsRadarChart" width="400" height="400"></canvas>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('skillsRadarChart');
  if (!canvas) {
    console.error('Canvas not found');
    return;
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('Context not available');
    return;
  }

  try {
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Python/PyTorch', 'ML/Deep Learning', 'Statistical Analysis', 'SQL/Databases', 'Cloud (Azure/AWS)', 'Data Visualization', 'Research/Theory'],
        datasets: [{
          label: 'Proficiency',
          data: [95, 90, 92, 85, 80, 88, 93],
          fill: true,
          backgroundColor: 'rgba(74, 144, 226, 0.2)',
          borderColor: '#4A90E2',
          borderWidth: 2,
          pointBackgroundColor: ['#8B5CF6', '#4A90E2', '#2c5f2d', '#F59E0B', '#14B8A6', '#4A90E2', '#8B5CF6'],
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#4A90E2',
          pointRadius: 6,
          pointHoverRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          r: {
            angleLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.1)'
            },
            suggestedMin: 0,
            suggestedMax: 100,
            ticks: {
              stepSize: 20,
              backdropColor: 'transparent'
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: false
          }
        }
      }
    });
  } catch (error) {
    console.error('Error creating chart:', error);
  }
});
</script>

---

## GitHub Projects

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5em; margin: 2em 0;">

  <!-- Repo 1: Thesis -->
  <div class="repo-card">
    <h4 style="margin-top: 0;">
      <i class="fab fa-github"></i> EEG-Seizure-CNN-Thesis
    </h4>
    <p style="color: #666; font-size: 0.9em; margin: 0.5em 0;">
      CNN-based EEG seizure detection with Lipschitz stability analysis (L = 24.72). PyTorch implementation with 97% accuracy.
    </p>
    <div style="margin-top: 1em;">
      <span style="color: #f1e05a; margin-right: 1em;"><i class="fas fa-circle"></i> Python</span>
      <span style="color: #666;"><i class="fas fa-star"></i> Published</span>
    </div>
    <a href="https://github.com/jacksonSmall/EEG-Seizure-CNN-Thesis" style="display: inline-block; margin-top: 1em;">
      View Repository →
    </a>
  </div>

  <!-- Repo 2: Telematics -->
  <div class="repo-card">
    <h4 style="margin-top: 0;">
      <i class="fab fa-github"></i> Small_Jackson_TelematicsInsurance
    </h4>
    <p style="color: #666; font-size: 0.9em; margin: 0.5em 0;">
      AI-powered driver risk scoring platform with Streamlit dashboard. 0.98 ROC-AUC, 47 engineered features.
    </p>
    <div style="margin-top: 1em;">
      <span style="color: #f1e05a; margin-right: 1em;"><i class="fas fa-circle"></i> Python</span>
      <span style="color: #666;"><i class="fas fa-chart-line"></i> ML</span>
    </div>
    <a href="https://github.com/jacksonSmall/Small_Jackson_TelematicsInsurance" style="display: inline-block; margin-top: 1em;">
      View Repository →
    </a>
  </div>

  <!-- Repo 3: Shopper Behavior -->
  <div class="repo-card">
    <h4 style="margin-top: 0;">
      <i class="fab fa-github"></i> shopper-behavior-analysis
    </h4>
    <p style="color: #666; font-size: 0.9em; margin: 0.5em 0;">
      E-commerce purchase prediction using K-Means clustering, SMOTE, and Random Forest. 0.93 AUC on 12,330 sessions.
    </p>
    <div style="margin-top: 1em;">
      <span style="color: #f1e05a; margin-right: 1em;"><i class="fas fa-circle"></i> Python</span>
      <span style="color: #666;"><i class="fas fa-shopping-cart"></i> Analytics</span>
    </div>
    <a href="https://github.com/jacksonSmall/shopper-behavior-analysis" style="display: inline-block; margin-top: 1em;">
      View Repository →
    </a>
  </div>

  <!-- Repo 4: DataSci-Coder -->
  <div class="repo-card">
    <h4 style="margin-top: 0;">
      <i class="fab fa-github"></i> DataSci-Coder
    </h4>
    <p style="color: #666; font-size: 0.9em; margin: 0.5em 0;">
      Fine-tuned Qwen2.5-Coder-14B via QLoRA on 10,795 curated DS examples. 93.3% instruction compliance vs 91.4% base. Published on HuggingFace.
    </p>
    <div style="margin-top: 1em;">
      <span style="color: #f1e05a; margin-right: 1em;"><i class="fas fa-circle"></i> Python</span>
      <span style="color: #666;"><i class="fas fa-brain"></i> LLM Fine-tuning</span>
    </div>
    <a href="https://github.com/jacksonSmall/DataSci-Coder" style="display: inline-block; margin-top: 1em;">
      View Repository →
    </a>
  </div>

</div>

<h3 style="text-align: center; margin-top: 2em;">GitHub Activity</h3>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2em; margin: 2em 0;">

  <!-- Contribution Calendar -->
  <div style="text-align: center; padding: 1em; background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <h4 style="margin-top: 0;">Contribution Activity</h4>
    <img src="http://ghchart.rshah.org/2c5f2d/jacksonSmall" alt="GitHub Contribution Chart" style="max-width: 100%; height: auto;" />
  </div>

  <!-- Language Stats -->
  <div style="text-align: center; padding: 1em; background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <h4 style="margin-top: 0;">Top Languages</h4>
    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=jacksonSmall&layout=compact&theme=default&hide_border=true&langs_count=8" alt="Top Languages" style="max-width: 100%; height: auto;" />
  </div>

</div>

<p style="text-align: center; color: #666; font-size: 0.9em;">
  <a href="https://github.com/jacksonSmall" target="_blank">View full GitHub profile →</a>
</p>

---

## Certifications

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5em; margin: 2em 0;">

  <div class="cert-badge" style="border: 1px solid #ddd; border-radius: 8px; padding: 1.5em; text-align: center; background: white;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" style="height: 40px; margin-bottom: 1em;" alt="Microsoft" />
    <h4 style="margin: 0.5em 0;">Microsoft Azure AI Essentials</h4>
    <p style="color: #666; font-size: 0.9em;">Microsoft & LinkedIn Learning</p>
    <p style="color: #999; font-size: 0.85em;">December 2025</p>
    <a href="https://www.linkedin.com/learning/certificates/" class="btn btn--small" style="margin-top: 0.5em;">View Certificate</a>
  </div>

  <div class="cert-badge" style="border: 1px solid #ddd; border-radius: 8px; padding: 1.5em; text-align: center; background: white;">
    <img src="https://upload.wikimedia.org/wikipedia/en/c/cd/Anaconda_Logo.png" style="height: 40px; margin-bottom: 1em;" alt="Anaconda" />
    <h4 style="margin: 0.5em 0;">Anaconda Python for Data Science</h4>
    <p style="color: #666; font-size: 0.9em;">Anaconda, Inc. & LinkedIn Learning</p>
    <p style="color: #999; font-size: 0.85em;">December 2025</p>
    <a href="https://www.linkedin.com/learning/certificates/" class="btn btn--small" style="margin-top: 0.5em;">View Certificate</a>
  </div>

</div>

---

## Let's Connect

<div class="cta-section" style="text-align: center; margin: 3em 0; padding: 2em; background-color: #f8f9fa; border-radius: 8px;">
  <h3>Admitted to UCF M.S. Statistics and Data Science (Fall 2026)</h3>
  <p style="font-size: 1.1em; margin: 1em 0; max-width: 650px; margin-left: auto; margin-right: auto;">
    Admitted to UCF M.S. Statistics and Data Science (Fall 2026) with Graduate Teaching Assistantship + Graduate Dean's Fellowship — a competitive merit award. I'm seeking roles where statistical rigor meets production impact. As an Epilepsy Foundation Ambassador, I'm especially passionate about medical AI applications.
  </p>

  <!-- LinkedIn Badge -->
  <div style="margin: 1.5em 0;">
    <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
    <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="jackson-small-ds" data-version="v1">
      <a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/jackson-small-ds?trk=profile-badge">Jackson Small</a>
    </div>
  </div>

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

---

## Fun Facts

- I run [Hyprland on Arch Linux](https://github.com/jacksonSmall/dotfiles) (btw)
- I play drums, cajon, and electric guitar

<!-- Custom JavaScript -->
<script src="{{ site.baseurl }}/assets/js/custom.js"></script>
