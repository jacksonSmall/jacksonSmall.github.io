---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

<!-- Custom CSS -->
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/custom.css">

{% include base_path %}

<div class="hero-section" style="text-align: center; padding: 3em 2em; background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%); border-radius: 16px; margin: 2em 0; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border-left: 4px solid #2c5f2d;">
  <h2 style="margin-top: 0; color: #1a4d1b; font-size: 2em;">Published Honors Thesis</h2>
  <p style="font-size: 1.3em; margin: 1em 0; color: #1b5e20; font-weight: 600;">
    Theoretical Analysis of CNNs for Automatic Seizure Detection in EEG Signals
  </p>
  <div style="margin: 1.5em 0;">
    <span style="display: inline-block; margin: 0.5em; padding: 0.5em 1em; background: rgba(255,255,255,0.8); border-radius: 20px; font-weight: 600; color: #2c5f2d;">97% Accuracy</span>
    <span style="display: inline-block; margin: 0.5em; padding: 0.5em 1em; background: rgba(255,255,255,0.8); border-radius: 20px; font-weight: 600; color: #2c5f2d;">0.99 AUC</span>
    <span style="display: inline-block; margin: 0.5em; padding: 0.5em 1em; background: rgba(255,255,255,0.8); border-radius: 20px; font-weight: 600; color: #2c5f2d;">L = 24.72</span>
  </div>
  <p style="color: #666; margin: 1em 0; font-size: 1em;">
    Published in UCF STARS Digital Repository
  </p>
  <a href="https://stars.library.ucf.edu/hut2024/462" class="btn btn--primary btn--large" style="margin: 0.5em;" target="_blank">
    <i class="fas fa-file-pdf"></i> View/Download Thesis (STARS)
  </a>
  <a href="https://github.com/jacksonSmall/EEG-Seizure-CNN-Thesis" class="btn btn--inverse btn--large" style="margin: 0.5em;" target="_blank">
    <i class="fab fa-github"></i> View Code & Data
  </a>
</div>

---

## Published Work

<div class="featured-card" style="padding: 2em; background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%); border-radius: 12px; margin: 2em 0; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border-left: 4px solid #8B5CF6;">

<p style="margin-top: 0;"><strong>Small, J. T.</strong> (2025). <em>Theoretical Analysis of CNNs for Automatic Seizure Detection in EEG Signals</em>. Honors Undergraduate Theses, Paper 462. University of Central Florida, Burnett Honors College.</p>

<h4 style="color: #8B5CF6; margin-top: 1.5em;">Abstract:</h4>
<p style="text-align: justify;">Epilepsy is a common brain disorder where neurons in the brain rapidly fire, causing recurring seizures. The brain activity during a seizure can be detected by electroencephalogram (EEG) signals; however, this process is not only labor-intensive and time-consuming but is also subject to inter-rater variability, with a study showing only moderate agreement when diagnosing patients, even among experts. Convolutional Neural Networks (CNNs) are often proposed to detect seizures automatically, achieving high performance. The focus on performance comes at a cost of losing interpretability, leaving the model as effective but seen as a 'black box'. This thesis confronts the interpretability knowledge gap by conducting a theoretical analysis of a 1D CNN trained on the Bonn EEG Dataset. The analysis reveals how exactly the model learns, showing that the first convolutional layer develops specific filters. Across most classification tasks, the model learned to focus on the approximately 22 Hz beta-wave band as a key neurophysiological feature. Furthermore, the model's stability was quantified using the Lipschitz bound. This work successfully bridges the gap between high-performance metrics and theoretical understanding, providing a framework for interpreting CNN based seizure detection.</p>

<p><strong>Keywords:</strong> Epilepsy; CNN; Deep Learning; Data Science; Seizure; EEG</p>

<div style="margin-top: 1.5em;">
  <a href="https://stars.library.ucf.edu/hut2024/462" class="btn btn--primary" style="margin: 0.5em;">Read Full Thesis</a>
  <a href="https://github.com/jacksonSmall/EEG-Seizure-CNN-Thesis" class="btn btn--inverse" style="margin: 0.5em;">GitHub Repository</a>
  <a href="/portfolio/thesis/" class="btn btn--info" style="margin: 0.5em;">View Project Details</a>
</div>

</div>

---

## Presentations

<div class="featured-card" style="padding: 2em; background: linear-gradient(135deg, #f8fafc 0%, #dbeafe 100%); border-radius: 12px; margin: 2em 0; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border-left: 4px solid #4A90E2;">

<p style="margin-top: 0;"><strong>Small, J. T.</strong> (September 2025). "Theoretical Analysis of CNNs for Automatic Seizure Detection in EEG Signals." Poster presentation at Burnett Honors College Family Weekend, University of Central Florida, Orlando, FL.</p>

</div>

<div class="featured-card" style="padding: 2em; background: linear-gradient(135deg, #f8fafc 0%, #dbeafe 100%); border-radius: 12px; margin: 2em 0; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border-left: 4px solid #4A90E2;">

<p style="margin-top: 0;"><strong>Small, J. T.</strong> (March 2026). "Theoretical Analysis of CNNs for Automatic Seizure Detection in EEG Signals." Poster presentation at UCF Student Scholar Symposium, University of Central Florida, Orlando, FL.</p>

</div>

---

## Citation Information

If you use this work in your research, please cite:

```bibtex
@thesis{small2025cnn,
  author  = {Small, Jackson T.},
  title   = {Theoretical Analysis of CNNs for Automatic Seizure Detection in EEG Signals},
  school  = {University of Central Florida},
  year    = {2025},
  type    = {Honors Undergraduate Theses},
  number  = {462},
  url     = {https://stars.library.ucf.edu/hut2024/462}
}
```

---

## Research Interests

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1em; margin: 2em 0;">
  <div style="padding: 1em; background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%); border-radius: 8px; text-align: center; font-weight: 600; color: #4338ca;">
    Deep Learning for Biomedical Signal Processing
  </div>
  <div style="padding: 1em; background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); border-radius: 8px; text-align: center; font-weight: 600; color: #1e40af;">
    Model Robustness and Interpretability
  </div>
  <div style="padding: 1em; background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%); border-radius: 8px; text-align: center; font-weight: 600; color: #1b5e20;">
    Time-Series Analysis and Forecasting
  </div>
  <div style="padding: 1em; background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 8px; text-align: center; font-weight: 600; color: #92400e;">
    Statistical Learning Theory
  </div>
  <div style="padding: 1em; background: linear-gradient(135deg, #ccfbf1 0%, #99f6e4 100%); border-radius: 8px; text-align: center; font-weight: 600; color: #115e59;">
    Healthcare AI and Clinical Decision Support
  </div>
</div>

---

<div class="cta-section" style="text-align: center; margin-top: 3em; padding: 3em 2em; border-radius: 12px; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #dbeafe 100%); border: 2px solid #bfdbfe;">
  <h3 style="margin-top: 0;">Contact for Collaboration</h3>
  <p style="font-size: 1.1em; margin: 1em 0;">Interested in collaborating on research at the intersection of deep learning theory and biomedical applications? Let's connect:</p>
  <div style="margin-top: 2em;">
    <a href="mailto:jacksonSmall@ucf.edu" class="btn btn--primary" style="margin: 0.5em;">
      <i class="fas fa-envelope"></i> Email Me
    </a>
    <a href="https://www.linkedin.com/in/jackson-small-ds" class="btn btn--info" style="margin: 0.5em;">
      <i class="fab fa-linkedin"></i> LinkedIn
    </a>
    <a href="https://github.com/jacksonSmall" class="btn btn--inverse" style="margin: 0.5em;">
      <i class="fab fa-github"></i> GitHub
    </a>
  </div>
</div>
