import sys
import json
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer
import pandas as pd

users = [
    {"id": "1", "preferences": "luxury,beach,modern"},
    {"id": "2", "preferences": "urban,compact,affordable"},
]

properties = [
    {"id": "101", "name": "Luxury Beach House", "tags": "luxury,beach,modern"},
    {"id": "102", "name": "Urban Apartment", "tags": "urban,compact,affordable"},
    {"id": "103", "name": "Modern Villa", "tags": "luxury,modern,spacious"},
]

user_id = sys.argv[1]
user = next((u for u in users if u["id"] == user_id), None)

if user:
    properties_df = pd.DataFrame(properties)
    properties_df["tags"] = properties_df["tags"].astype(str)

    user_preferences = {"id": "user", "tags": user["preferences"]}
    combined = pd.concat([properties_df, pd.DataFrame([user_preferences])], ignore_index=True)

    vectorizer = CountVectorizer()
    tag_vectors = vectorizer.fit_transform(combined["tags"])

    similarities = cosine_similarity(tag_vectors[-1], tag_vectors[:-1]).flatten()
    recommendations = properties_df.iloc[similarities.argsort()[-3:][::-1]].to_dict(orient="records")
    print(json.dumps(recommendations))
else:
    print(json.dumps([]))
