from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import io
import pickle
import numpy as np
from tensorflow.keras.models import load_model  # For loading .keras model

app = Flask(__name__)
CORS(app)

# Constants
IMAGE_SIZE = 256

# Crop configuration: models and class names for each crop
CROPS = {
    'apple': {
        'model_path': 'models/apple_disease_model.keras',
        'classes': ['Apple Scab', 'Black Rot', 'Cedar Apple Rust', 'Healthy']
    },
    'bell pepper': {
        'model_path': 'models/bell_pepper_disease_model.keras',
        'classes': ['Bacterial Spot', 'Healthy']
    },
    'cherry': {
        'model_path': 'models/cherry_disease_model.keras',
        'classes': ['Healthy', 'Powdery Mildew']
    },
    'corn': {
        'model_path': 'models/corn_disease_model.keras',
        'classes': ['Cercospora Leaf Spot', 'Common Rust', 'Healthy', 'Northern Leaf Blight']
    },
    'grape': {
        'model_path': 'models/grape_disease_model.keras',
        'classes': ['Black Rot', 'Esca', 'Healthy', 'Leaf Blight']
    },
    'peach': {
        'model_path': 'models/peach_disease_model.keras',
        'classes': ['Bacterial Spot', 'Healthy']
    },
    'potato': {
        'model_path': 'models/potato_disease_model.keras',
        'classes': ['Early Blight', 'Healthy', 'Late Blight']
    },
    'strawberry': {
        'model_path': 'models/strawberry_disease_model.keras',
        'classes': ['Healthy', 'Leaf Scorch']
    },
    'tomato': {
        'model_path': 'models/tomato_disease_model.keras',
        'classes': ['Bacterial Spot', 'Early Blight', 'Healthy', 'Late Blight', 'Septoria Leaf Spot','Yellow Leaf Curl Virus']
    },
}

# Cache loaded models
loaded_models = {}

def load_model_for_crop(crop_name):
    if crop_name not in CROPS:
        return None, f"Model for crop '{crop_name}' not configured."
    
    if crop_name in loaded_models:
        return loaded_models[crop_name], None

    try:
        model = load_model(CROPS[crop_name]['model_path'])
        loaded_models[crop_name] = model
        return model, None
    except Exception as e:
        return None, f"Failed to load model for {crop_name}: {str(e)}"

@app.route('/predict', methods=['POST'])
def predict():
    crop_name = request.form.get('crop')
    if not crop_name:
        return jsonify({'error': 'Crop name not provided'}), 400

    model, error = load_model_for_crop(crop_name)
    if error:
        return jsonify({'error': error}), 400

    if 'file' not in request.files:
        return jsonify({'error': 'No file part in request'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    try:
        image = Image.open(io.BytesIO(file.read())).convert("RGB")
        image = image.resize((IMAGE_SIZE, IMAGE_SIZE))
        img_array = np.array(image) / 255.0
        img_array = img_array.reshape(1, IMAGE_SIZE, IMAGE_SIZE, 3)

        prediction = model.predict(img_array)

        class_names = CROPS[crop_name]['classes']
        predicted_class_index = np.argmax(prediction[0])
        predicted_class_name = class_names[predicted_class_index]

        return jsonify({'result': predicted_class_name}), 200

    except Exception as e:
        return jsonify({'error': f'Error during prediction: {str(e)}'}), 500
    

recom_model= pickle.load(open('models/best_crop_recommendation_model.pkl','rb'))

@app.route('/predict_crop', methods=['POST'])
def predict_crop():
    crop_dict = {
        1: "Rice", 2: "Maize", 3: "Jute", 4: "Cotton", 5: "Coconut", 6: "Papaya", 7: "Orange",
        8: "Apple", 9: "Muskmelon", 10: "Watermelon", 11: "Grapes", 12: "Mango", 13: "Banana",
        14: "Pomegranate", 15: "Lentil", 16: "Blackgram", 17: "Mungbean", 18: "Mothbeans",
        19: "Pigeonpeas", 20: "Kidneybeans", 21: "Chickpea", 22: "Coffee"
    }
    try:
        data = request.get_json(force=True)
        input_data = np.array(data.get('data'))
        print(input_data)
        # if input_data is None or input_data.shape != (1, 7):
        #     return jsonify({'error': 'Invalid input shape. Expected shape (1, 7).'}), 400

        prediction = recom_model.predict(input_data)
        predicted_class_name = crop_dict.get(prediction[0], "Unknown Crop")

        return jsonify({'result': predicted_class_name}), 200
    except Exception as e:
        return jsonify({'error': f'Error during prediction: {str(e)}'}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)
