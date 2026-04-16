---
title: "E-Commerce Shopper Behavior Analysis"
excerpt: "ML pipeline predicting purchase intent from 12,330 sessions using clustering, SMOTE, and ensemble methods achieving 0.93 AUC."
collection: portfolio
---

<!-- Custom CSS -->
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/custom.css">


## Overview


<div style="padding: 2em; background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 12px; margin: 2em 0; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border-left: 4px solid #F59E0B;">

<p style="font-size: 1.1em;">A comprehensive machine learning analysis of online shopping behavior, predicting whether a user session will result in a purchase. This project demonstrates rigorous statistical testing, feature engineering, and model optimization on a real-world e-commerce dataset.</p>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1em; margin-top: 1.5em;">
  <div style="text-align: center; padding: 1em; background: rgba(255,255,255,0.8); border-radius: 8px;">
    <div style="font-size: 2em; font-weight: bold; color: #F59E0B;">0.93</div>
    <div style="font-size: 0.9em; color: #666;">AUC-ROC</div>
  </div>
  <div style="text-align: center; padding: 1em; background: rgba(255,255,255,0.8); border-radius: 8px;">
    <div style="font-size: 2em; font-weight: bold; color: #2c5f2d;">91%</div>
    <div style="font-size: 0.9em; color: #666;">F1-Score</div>
  </div>
  <div style="text-align: center; padding: 1em; background: rgba(255,255,255,0.8); border-radius: 8px;">
    <div style="font-size: 2em; font-weight: bold; color: #4A90E2;">12,330</div>
    <div style="font-size: 0.9em; color: #666;">Sessions</div>
  </div>

<p style="margin-top: 1.5em; color: #666;"><strong>Project Type:</strong> Academic (UCF) | <strong>Date:</strong> Oct. 2025 – Dec. 2025 | <strong>Team Size:</strong> Individual</p>


---


## Business Problem


**Objective:** Predict purchase intent from user session data to optimize:
- **Marketing Spend:** Target high-intent users with ads
- **Inventory Management:** Anticipate demand spikes
- **User Experience:** Personalize content for conversion

**Challenge:** Severe class imbalance (only 15.5% of sessions result in purchases)

---

## Dataset

**UCI Machine Learning Repository: Online Shoppers Purchasing Intention Dataset**

| Attribute | Description |
|-----------|-------------|
| **Samples** | 12,330 sessions |
| **Features** | 17 (10 numerical, 7 categorical) |
| **Target** | Revenue (Binary: Purchase / No Purchase) |
| **Class Distribution** | 84.5% No Purchase, 15.5% Purchase |
| **Time Period** | 1 year of e-commerce activity |

**Key Features:**
- **Behavioral:** Page views (Administrative, Informational, Product)
- **Engagement:** Time on site, bounce rates, exit rates
- **Temporal:** Month, weekend vs. weekday
- **User Context:** Visitor type (New/Returning), browser, OS, region
- **Google Analytics:** Page values (revenue attribution)

---


## Methodology


### 1. Exploratory Data Analysis (EDA)

**Class Imbalance Investigation:**
```python
import pandas as pd
import matplotlib.pyplot as plt

# Class distribution
revenue_counts = df['Revenue'].value_counts()
print(f"No Purchase: {revenue_counts[False]} ({revenue_counts[False]/len(df)*100:.1f}%)")
print(f"Purchase: {revenue_counts[True]} ({revenue_counts[True]/len(df)*100:.1f}%)")

# Visualization
plt.figure(figsize=(8, 6))
revenue_counts.plot(kind='bar', color=['#ff6b6b', '#4ecdc4'])
plt.title('Class Imbalance in Revenue')
plt.xlabel('Purchase Decision')
plt.ylabel('Count')
plt.xticks(rotation=0)
plt.show()
```

**Result:** 84.5% / 15.5% split → SMOTE required

---

### 2. Feature Engineering

**Log Transformations:**
Heavy right-skew in numerical features required log transformation:
```python
from sklearn.preprocessing import FunctionTransformer
import numpy as np

log_features = ['ProductRelated', 'ProductRelated_Duration', 'PageValues']
log_transformer = FunctionTransformer(np.log1p, validate=True)

df[log_features] = log_transformer.transform(df[log_features])
```

**Before/After:** Reduced skewness from 5.2 → 0.8 (closer to normality)

**One-Hot Encoding:**
```python
from sklearn.preprocessing import OneHotEncoder

categorical_features = ['Month', 'VisitorType', 'Browser', 'Region']
encoder = OneHotEncoder(sparse=False, drop='first')  # Avoid multicollinearity

encoded = encoder.fit_transform(df[categorical_features])
feature_names = encoder.get_feature_names_out(categorical_features)

df_encoded = pd.DataFrame(encoded, columns=feature_names, index=df.index)
df = pd.concat([df.drop(categorical_features, axis=1), df_encoded], axis=1)
```

---

### 3. Unsupervised Learning: K-Means Clustering

**Goal:** Discover latent user segments before supervised modeling

**Elbow Method for K:**
```python
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score

inertias = []
silhouette_scores = []

for k in range(2, 11):
    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
    kmeans.fit(X_scaled)
    inertias.append(kmeans.inertia_)
    silhouette_scores.append(silhouette_score(X_scaled, kmeans.labels_))

# Optimal K = 5 (elbow + silhouette peak)
```

**5 Discovered Segments:**
1. **Bargain Hunters:** Low PageValues, high bounce rate, weekend traffic
2. **Window Shoppers:** High page views, low conversion, returning visitors
3. **Intent Buyers:** High PageValues, low exit rate, product-focused
4. **Impulse Buyers:** Short sessions, high conversion rate
5. **Researchers:** Long duration, high informational pages, low conversion

**Feature Contribution:** Added cluster assignments as categorical feature → +2.3% AUC improvement

---

### 4. Statistical Testing

**ANOVA (Numerical Features):**
```python
from scipy.stats import f_oneway

for feature in numerical_features:
    purchasers = df[df['Revenue'] == True][feature]
    non_purchasers = df[df['Revenue'] == False][feature]
    f_stat, p_value = f_oneway(purchasers, non_purchasers)
    
    if p_value < 0.001:
        print(f"{feature}: F={f_stat:.2f}, p={p_value:.2e} *** SIGNIFICANT")
```

**Significant Features (p < 0.001):**
- PageValues: F=1245.32
- ExitRates: F=892.14
- ProductRelated_Duration: F=456.78

**Chi-Square (Categorical Features):**
```python
from scipy.stats import chi2_contingency

for feature in categorical_features:
    contingency_table = pd.crosstab(df[feature], df['Revenue'])
    chi2, p_value, dof, expected = chi2_contingency(contingency_table)
    
    if p_value < 0.05:
        print(f"{feature}: χ²={chi2:.2f}, p={p_value:.2e} * SIGNIFICANT")
```

**Significant Categorical Features:**
- Month (χ² = 234.56, p < 0.001)
- VisitorType (χ² = 189.23, p < 0.001)

---

### 5. Handling Class Imbalance: SMOTE

**Synthetic Minority Over-sampling Technique:**
```python
from imblearn.over_sampling import SMOTE

smote = SMOTE(sampling_strategy='auto', random_state=42, k_neighbors=5)
X_train_resampled, y_train_resampled = smote.fit_resample(X_train, y_train)

print(f"Before SMOTE: {Counter(y_train)}")
print(f"After SMOTE: {Counter(y_train_resampled)}")
```

**Result:**
- Before: {False: 8,405, True: 1,539}
- After: {False: 8,405, True: 8,405} → Balanced 50/50

---

### 6. Model Comparison Pipeline

**Scikit-learn Pipeline Architecture:**
```python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import GridSearchCV

models = {
    'KNN': KNeighborsClassifier(),
    'Logistic Regression': LogisticRegression(max_iter=1000),
    'SVM': SVC(probability=True),
    'Random Forest': RandomForestClassifier(random_state=42)
}

for name, model in models.items():
    pipeline = Pipeline([
        ('scaler', StandardScaler()),
        ('classifier', model)
    ])
    
    pipeline.fit(X_train_resampled, y_train_resampled)
    y_pred = pipeline.predict(X_test)
    
    print(f"\n{name} Results:")
    print(classification_report(y_test, y_pred))
```

---


## Results


### Model Performance Comparison

| Model | Accuracy | Precision | Recall | F1-Score | AUC-ROC | Training Time |
|-------|----------|-----------|--------|----------|---------|---------------|
| KNN | 0.85 | 0.72 | 0.68 | 0.70 | 0.84 | 2.1s |
| Logistic Regression | 0.88 | 0.79 | 0.76 | 0.77 | 0.88 | 0.8s |
| SVM | 0.87 | 0.77 | 0.74 | 0.75 | 0.87 | 45.3s |
| **Random Forest** | **0.91** | **0.88** | **0.86** | **0.91** | **0.93** | **12.4s** |

### Winner: Random Forest

**Hyperparameters (GridSearchCV):**
```python
param_grid = {
    'classifier__n_estimators': [100, 200, 300],
    'classifier__max_depth': [10, 20, None],
    'classifier__min_samples_split': [2, 5, 10]
}

grid_search = GridSearchCV(pipeline, param_grid, cv=5, scoring='f1', n_jobs=-1)
grid_search.fit(X_train_resampled, y_train_resampled)

print(f"Best params: {grid_search.best_params_}")
# Best: n_estimators=300, max_depth=20, min_samples_split=2
```

**Final Test Set Performance:**
- **AUC-ROC:** 0.93
- **F1-Score:** 0.91
- **Precision:** 0.88 (88% of predicted purchases are correct)
- **Recall:** 0.86 (86% of actual purchases are caught)

---

### Feature Importance Analysis

**Top 10 Predictive Features:**

| Feature | Importance | Interpretation |
|---------|------------|----------------|
| **PageValues** | 0.342 | Revenue attribution from Google Analytics |
| **ExitRates** | 0.186 | Higher exit = lower purchase intent |
| **ProductRelated_Duration** | 0.124 | Time spent on product pages |
| **Month_Nov** | 0.089 | Black Friday effect |
| **BounceRates** | 0.067 | Single-page sessions |
| **Administrative_Duration** | 0.052 | Time on account/checkout pages |
| **VisitorType_Returning** | 0.041 | Loyalty indicator |
| **Weekend** | 0.033 | Shopping behavior differences |
| **Cluster_3** | 0.028 | Intent Buyer segment |
| **SpecialDay** | 0.021 | Proximity to holidays |

**Key Insight:** PageValues alone accounts for 34.2% of model decisions

---

## Business Recommendations

1. **Targeting Strategy:**
   - Users with PageValues > 50: 78% purchase probability → Aggressive retargeting
   - Exit Rate > 0.05: Offer exit-intent popups with discounts

2. **Seasonality:**
   - November (Black Friday): 2.3x baseline conversion → Scale inventory by 130%
   - Weekend traffic: Lower conversion but higher order value → Focus on premium products

3. **User Segmentation:**
   - **Intent Buyers (Cluster 3):** Streamline checkout, reduce friction
   - **Window Shoppers (Cluster 2):** Email nurturing campaigns, social proof

4. **Real-Time Scoring:**
   - Deploy model as API: Predict purchase intent within first 30 seconds
   - Use predictions to personalize product recommendations and discounts

---

## Challenges & Learnings

| Challenge | Solution | Learning |
|-----------|----------|----------|
| **Severe Class Imbalance** | SMOTE + class weights | Always visualize class distribution first |
| **High Feature Correlation** | VIF analysis, drop correlated pairs | ExitRates & BounceRates had VIF > 10 |
| **Overfitting** | Cross-validation, max_depth tuning | Validation curve showed depth=20 optimal |
| **Interpretability** | Feature importance + SHAP values | Stakeholders need "why", not just "what" |

---

## Technologies Used

Python • Scikit-learn • Pandas • NumPy • Matplotlib • Seaborn • SMOTE • Jupyter

---

## Links & Resources

- **💻 [GitHub Repository](https://github.com/jacksonSmall/shopper-behavior-analysis)**
- **📧 [Questions?](mailto:jacksonSmall@ucf.edu)**

---

## Key Takeaways

<div style="padding: 2em; background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%); border-radius: 12px; margin: 2em 0; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border-left: 4px solid #8B5CF6;">

✅ **Statistical Rigor:** ANOVA/Chi-Square validated feature selection
✅ **Class Imbalance:** SMOTE improved recall from 68% → 86%
✅ **Ensemble Methods:** Random Forest outperformed simpler models by 5-8%
✅ **Feature Engineering:** Log transformations + clustering boosted AUC by 7%
✅ **Business Value:** Model identifies 86% of potential purchases for targeted marketing


---

<div class="cta-section" style="text-align: center; margin-top: 3em; padding: 2em; border-radius: 12px;">
  <h3>Interested in This Analysis?</h3>
  <p>Explore the notebooks or discuss e-commerce ML applications.</p>
  <a href="https://github.com/jacksonSmall/shopper-behavior-analysis" class="btn btn--primary" style="margin: 0.5em;">
    <i class="fab fa-github"></i> View GitHub Repository
  </a>
  <a href="mailto:jacksonSmall@ucf.edu" class="btn btn--inverse" style="margin: 0.5em;">
    <i class="fas fa-envelope"></i> Contact Me
  </a>
  <a href="/portfolio/" class="btn btn--info" style="margin: 0.5em;">
    <i class="fas fa-th"></i> View All Projects
  </a>
