---
title: "Theoretical Analysis of CNNs for Automatic Seizure Detection in EEG Signals"
excerpt: "Undergraduate Honors Thesis using PyTorch, SMOTE, and Lipschitz bounds to achieve 97% accuracy in seizure detection."
collection: portfolio
---

<!-- Custom CSS -->
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/custom.css">

<div style="background: linear-gradient(135deg, #e0f2fe 0%, #dbeafe 100%); border-left: 4px solid #4A90E2; padding: 1.5em; margin: 2em 0; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
  <strong style="color: #1e40af;">Official Publication:</strong> For the complete published thesis, please visit the <a href="/publications/" style="color: #4A90E2; font-weight: 600;">Publications page</a> to download from the UCF STARS Digital Repository.
</div>

## Overview

**First Data Science undergraduate to publish in the UCF STARS Honors Undergraduate Thesis repository.**

This project represents my Undergraduate Honors Thesis at UCF, where I bridged the gap between deep learning application and mathematical theory to detect seizure activity in EEG signals. Advised by **Dr. Chudamani Poudyal (SDMSS, UCF)**, the work was published in the UCF STARS repository and presented as a poster at two events.

**Status:** Published | **Link:** [stars.library.ucf.edu/hut2024/462](https://stars.library.ucf.edu/hut2024/462)

**Poster Presentations:**
- Burnett Honors College Family Weekend (September 2025)
- UCF Student Scholar Symposium (March 2026)

**Results:** 97% accuracy • 0.99 AUC • Lipschitz stability bounds L = 24.72

---

## Research Question

Can we rigorously analyze the stability and interpretability of 1D CNNs for automatic seizure detection in EEG signals using Lipschitz bounds and frequency domain analysis?

---

## Technical Architecture

### Data Pipeline
```
University of Bonn EEG Dataset
         ↓
Butterworth Bandpass Filter (0.5-50 Hz)
         ↓
Discrete Fourier Transform (DFT)
         ↓
Feature Engineering
         ↓
SMOTE (Class Balancing)
         ↓
1D CNN Model (PyTorch)
```

### Model Architecture

**1D Convolutional Neural Network**
- **Input Layer:** 4097 time points (23.6 seconds @ 173.6 Hz)
- **Conv1:** 32 filters, kernel size 7, ReLU activation
- **MaxPool1:** Kernel size 2
- **Conv2:** 64 filters, kernel size 5, ReLU activation
- **MaxPool2:** Kernel size 2
- **Conv3:** 128 filters, kernel size 3, ReLU activation
- **Flatten + FC Layers:** 128 → 64 → 2 (Seizure/Non-Seizure)
- **Regularization:** Dropout (0.5), L2 Weight Decay

**Training Configuration:**
- **Optimizer:** Adam (lr=0.001)
- **Loss Function:** Cross-Entropy
- **Batch Size:** 32
- **Epochs:** 50 with early stopping
- **Device:** Apple Silicon (MPS)

---

## Key Results

### Performance Metrics

| Metric | Value |
|--------|-------|
| **Accuracy** | 97.0% |
| **AUC-ROC** | 0.99 |
| **Precision** | 96.8% |
| **Recall** | 97.2% |
| **F1-Score** | 97.0% |

### Scientific Discoveries

1. **Primary Learned Feature:** The model predominantly learned the **22 Hz beta-wave band** as the key discriminative feature for seizure detection
2. **Lipschitz Stability:** Established theoretical bounds with best stability L = 24.72 (B vs. E task), ensuring robust predictions under EEG signal noise
3. **Frequency Domain Interpretation:** DFT analysis revealed specific frequency bands (18-26 Hz) driving classification decisions

---

## Theoretical Contributions

### Lipschitz Bound Analysis

For a function f: ℝⁿ → ℝᵐ, the Lipschitz constant K satisfies:

**‖f(x₁) - f(x₂)‖ ≤ K‖x₁ - x₂‖**

**Applied to CNNs:**
- Bounded the Lipschitz constant of each layer (convolutions, pooling, activation)
- Proved compositional stability: L_total ≤ L₁ · L₂ · ... · Lₙ
- Estimated network bounds across 7 classification tasks (L = 24.72 to 58.32)
- Best stability: **L = 24.72** for B vs. E (Healthy, Eyes Closed vs. Ictal)
- Most challenging: L = 58.32 for combined (A+B+C+D) vs. E task

**Practical Implication:** The model remains stable even with EEG signal noise and artifacts common in clinical settings. Lower Lipschitz bounds indicate better robustness to input perturbations.

---

## Implementation Highlights

### Butterworth Filtering Pipeline

```python
from scipy.signal import butter, filtfilt

def butterworth_filter(signal, lowcut=0.5, highcut=50, fs=173.6, order=5):
    """
    Applies Butterworth bandpass filter to remove physiological noise
    """
    nyquist = 0.5 * fs
    low = lowcut / nyquist
    high = highcut / nyquist
    b, a = butter(order, [low, high], btype='band')
    return filtfilt(b, a, signal)
```

**Rationale:** Removes DC drift (<0.5 Hz) and high-frequency noise (>50 Hz) while preserving epileptic activity (typically 3-30 Hz).

### SMOTE for Class Imbalance

```python
from imblearn.over_sampling import SMOTE

smote = SMOTE(sampling_strategy='auto', random_state=42, k_neighbors=5)
X_train_resampled, y_train_resampled = smote.fit_resample(X_train, y_train)
```

**Impact:** Balanced dataset from 60/40 split to 50/50, improving recall from 89% → 97%.

### Frequency Domain Analysis (DFT)

```python
import numpy as np

def compute_power_spectrum(signal, fs=173.6):
    """
    Computes power spectral density using FFT
    """
    fft_vals = np.fft.fft(signal)
    fft_freq = np.fft.fftfreq(len(signal), 1/fs)
    power = np.abs(fft_vals) ** 2
    return fft_freq[:len(fft_freq)//2], power[:len(power)//2]
```

**Finding:** Seizure signals showed 3.2x higher power in the 18-26 Hz range compared to non-seizure signals.

---

## Dataset

**University of Bonn EEG Dataset**
- **Source:** Epilepsy Center, University of Bonn, Germany
- **Channels:** 100 single-channel EEG recordings
- **Classes:** 
  - Set Z: Healthy subjects, eyes open (n=100)
  - Set S: Seizure activity (n=100)
- **Duration:** 23.6 seconds per recording
- **Sampling Rate:** 173.6 Hz

---

## Challenges Overcome

1. **Small Dataset:** Mitigated with SMOTE and aggressive data augmentation
2. **High Dimensionality:** Reduced via frequency domain feature extraction
3. **Computational Constraints:** Optimized for Apple Silicon (MPS) with mixed-precision training
4. **Theoretical Rigor:** Bridged gap between empirical ML and formal mathematical analysis

---

## Future Work

1. **Multi-Channel Analysis:** Extend to full 10-20 EEG montages (19+ channels)
2. **Real-Time Deployment:** Optimize for edge devices (Raspberry Pi, mobile)
3. **Clinical Validation:** Test on larger datasets (CHB-MIT, TUH EEG)
4. **Explainability:** Integrate Grad-CAM for time-domain visualization
5. **Transfer Learning:** Pre-train on TUH, fine-tune on patient-specific data

---

## Impact & Recognition

- **First Data Science undergraduate to publish in UCF STARS Honors Undergraduate Thesis repository**
- **Thesis Defense:** Successfully defended before faculty committee (Fall 2025)
- **Poster Presentation:** Burnett Honors College Family Weekend (September 2025)
- **Poster Presentation:** UCF Student Scholar Symposium (March 2026)
- **Published:** [UCF STARS Digital Repository — hut2024/462](https://stars.library.ucf.edu/hut2024/462)
- **Advisor:** Dr. Chudamani Poudyal (SDMSS, UCF)

---

## Links & Resources

- **💻 [GitHub Repository](https://github.com/jacksonSmall/EEG-Seizure-CNN-Thesis)**
- **📧 [Contact for Collaboration](mailto:jacksonSmall@ucf.edu)**

---

## Technologies Used

Python • PyTorch • NumPy • SciPy • Scikit-learn • SMOTE • Jupyter • Matplotlib

---

## Citation

<div style="padding: 2em; background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-radius: 12px; margin: 2em 0; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border-left: 4px solid #8B5CF6;">

<p>If you use this work in your research, please cite:</p>

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

</div>

---

<div class="cta-section" style="text-align: center; margin-top: 3em; padding: 2em; border-radius: 12px;">
  <h3>Read the Full Thesis</h3>
  <p>Explore the complete published work and code implementation.</p>
  <a href="https://stars.library.ucf.edu/hut2024/462" class="btn btn--primary" style="margin: 0.5em;" target="_blank">
    <i class="fas fa-file-pdf"></i> Download from STARS
  </a>
  <a href="https://github.com/jacksonSmall/EEG-Seizure-CNN-Thesis" class="btn btn--inverse" style="margin: 0.5em;" target="_blank">
    <i class="fab fa-github"></i> View Code on GitHub
  </a>
  <a href="mailto:jacksonSmall@ucf.edu" class="btn btn--info" style="margin: 0.5em;">
    <i class="fas fa-envelope"></i> Contact for Collaboration
  </a>
</div>
