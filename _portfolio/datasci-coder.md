---
title: "DataSci-Coder: Fine-Tuned LLM for Data Science"
excerpt: "Fine-tuned Qwen2.5-Coder-14B via QLoRA on 10,795 curated DS examples. 93.3% instruction compliance vs 91.4% base. Published on HuggingFace."
collection: portfolio
---

<!-- Custom CSS -->
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/custom.css">

<div style="background: linear-gradient(135deg, #e0f2fe 0%, #dbeafe 100%); border-left: 4px solid #4A90E2; padding: 1.5em; margin: 2em 0; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
  <strong style="color: #1e40af;">Model on HuggingFace:</strong>
  <a href="https://huggingface.co/jsmall12/DataSci-Coder-14B-LoRA" style="color: #4A90E2; font-weight: 600;">jsmall12/DataSci-Coder-14B-LoRA</a>
  &nbsp;|&nbsp;
  <strong style="color: #1e40af;">GitHub:</strong>
  <a href="https://github.com/jacksonSmall/DataSci-Coder" style="color: #4A90E2; font-weight: 600;">jacksonSmall/DataSci-Coder</a>
</div>

## Overview

DataSci-Coder is a fine-tuned large language model specialized for data science code generation. Starting from Qwen2.5-Coder-14B-Instruct, I applied QLoRA (4-bit quantization) to train a domain-specific adapter on 10,795 curated examples covering statistics, machine learning, deep learning, and data engineering.

The core insight: general-purpose code models like the base Qwen2.5-Coder are excellent but treat all code domains equally. By fine-tuning on DS-specific examples with strict instruction-following requirements, the model learns to generate cleaner, more compliant data science code with zero explanatory text pollution.

**Status:** Published on HuggingFace (~40 downloads) | **Trained:** Spring 2026

---

## Training Setup

| Parameter | Value |
|-----------|-------|
| **Base Model** | unsloth/Qwen2.5-Coder-14B-Instruct-bnb-4bit |
| **Method** | QLoRA (4-bit quantization) |
| **LoRA Rank** | r=16, alpha=32, dropout=0.05 |
| **LoRA Targets** | q/k/v/o_proj + gate/up/down_proj |
| **Training Examples** | 10,795 |
| **Epochs** | 1 |
| **Batch Size** | 1 (grad_accum=16, effective=16) |
| **Learning Rate** | 3e-5 |
| **GPU** | Lightning AI L40S (44GB VRAM) |
| **Precision** | bf16 |
| **Training Time** | 1.9 hours |
| **Final Loss** | 0.5933 |

---

## Training Data

10,795 examples from 6+ sources, filtered to data science Python code:

- **Public HuggingFace datasets** (6 sources, max 3,000/dataset): Python code instructions, CodeAlpaca, Evol-Instruct variants
- **Newsletter content**: Daily Dose of Data Science and similar — scraped, cleaned, formatted to Q&A pairs
- **Class materials**: Stats, ML, and DL coursework formatted to instruction-following examples
- **Curated examples**: Hand-picked, high-quality examples weighted 3x in training mix

**Pipeline:** All sources → deduplication → quality filter → code-only filter → category cap (3,000/category) → stratified 90/10 train/val split

---

## Evaluation Results

### Hard Eval (12 keyword-based tasks)

All 12 tasks completed correctly. 3 apparent "failures" were false negatives from strict keyword matching:

- **Stacking ensemble**: Fine-tuned model built manually with `StratifiedKFold` (deeper understanding) instead of sklearn's `StackingClassifier` wrapper — eval required the exact class name
- **SHAP**: Fine-tuned model used `shap.Explainer` (newer, general-purpose API) instead of `shap.TreeExplainer` (legacy) — eval required legacy class name
- **GAN**: Fine-tuned model wrote correct `Generator`/`Discriminator` architecture with proper structure but used variable names like `z`/`output` rather than `fake`/`real`

All 12 implementations were correct, runnable, and complete. Fine-tuned model matched or beat the base on every task.

### Constraint Eval (10 multi-constraint tests)

| Metric | Fine-Tuned | Base | Delta |
|--------|-----------|------|-------|
| **Constraint Score** | 93.3% | 91.4% | +1.9% |
| **Code-Only Compliance** | 10/10 | 6/10 | **+4** |
| **Code Ratio** | 100% | 87.9% | **+12.1%** |

Won 3/10 tests, tied 5/10, lost 2/10.

**Key win:** The fine-tuned model follows "no explanations" instructions 100% of the time. The base model adds explanatory text 40% of the time even when explicitly instructed not to.

---

## Key Technical Insights

- **DO NOT** call `merge_and_unload()` on 4-bit models — produces garbage output. Keep adapter as a PEFT layer.
- Load adapter with `FastLanguageModel.from_pretrained(model_name=ADAPTER_DIR)`, not `PeftModel`
- Set `use_cache=False` in `generate()` to bypass Unsloth RoPE decode bug
- L40S supports bf16; T4 only fp16 — unsloth errors on mismatch
- `SFTTrainer` + `SFTConfig` required (not raw `Trainer`) — unsloth patches expect it

---

## Links

- **HuggingFace Model:** [huggingface.co/jsmall12/DataSci-Coder-14B-LoRA](https://huggingface.co/jsmall12/DataSci-Coder-14B-LoRA)
- **GitHub:** [github.com/jacksonSmall/DataSci-Coder](https://github.com/jacksonSmall/DataSci-Coder)
- **Contact:** [jacksonSmall@ucf.edu](mailto:jacksonSmall@ucf.edu)

---

## Technologies Used

Python • PyTorch • Hugging Face Transformers • QLoRA/PEFT • Unsloth • TRL (SFTTrainer) • Lightning AI
