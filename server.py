from flask import Flask, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/webhook-data', methods=['GET'])
def webhook_data():
    data = {
        'name': 'John',
        'age': 320
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run()
