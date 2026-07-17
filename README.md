
# 🛡️ AI-Powered Financial Fraud Detection & Risk Analysis System

## 📌 Overview

This project is an AI-powered Financial Fraud Detection System developed using Machine Learning. It analyzes financial transactions and predicts whether a transaction is fraudulent or legitimate.

The project includes complete data preprocessing, feature engineering, class balancing using SMOTE, model comparison, threshold tuning, explainability using SHAP, and performance evaluation.

---

## 🚀 Features

- Data Cleaning & Preprocessing
- Feature Engineering
- One-Hot Encoding
- Standard Scaling
- SMOTE for Imbalanced Data
- Logistic Regression
- Random Forest
- XGBoost (Final Model)
- Threshold Tuning
- ROC-AUC Evaluation
- SHAP Explainability
- Feature Importance Analysis
- Saved ML Model using Joblib

---

## 📂 Dataset

The project uses two datasets:

### Customers Dataset

- Customer_ID
- Age
- Occupation
- Monthly_Income
- Home_City
- Usual_Device
- Average_Transaction

### Transactions Dataset

- Transaction_ID
- Customer_ID
- Amount
- Hour
- Location
- Device
- Merchant
- Is_International
- Transactions_Last_1H
- Fraud

---

## ⚙️ Workflow

1. Data Cleaning
2. Exploratory Data Analysis (EDA)
3. Feature Engineering
4. Encoding
5. Train-Test Split
6. Standard Scaling
7. SMOTE
8. Model Training
9. Model Evaluation
10. Threshold Tuning
11. SHAP Explainability
12. Save Model

---

## 🤖 Models Used

- Logistic Regression
- Random Forest
- XGBoost (Final Model)

---

## 📈 Model Performance

| Metric      | Score            |
| ----------- | ---------------- |
| ROC-AUC     | **0.9728** |
| Final Model | XGBoost          |
| Threshold   | 0.30             |

Threshold tuning improved fraud detection recall significantly while maintaining strong overall performance.

---

## 📊 Visualizations

- Confusion Matrix
- ROC Curve
- SHAP Summary Plot
- SHAP Feature Importance

---

## 🛠️ Tech Stack

- Python
- Pandas
- NumPy
- Scikit-learn
- XGBoost
- SHAP
- Matplotlib
- Joblib

---

## 📌 Future Improvements

- Real-time Fraud Detection API
- FastAPI Deployment
- Interactive Dashboard
- Risk Score Prediction
- Live Transaction Monitoring

---

## 👨‍💻 Author

**Sumit Maurya**

GitHub: https://github.com/sumitmaurya2
