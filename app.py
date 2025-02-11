from flask import Flask, render_template, request, jsonify

app = Flask(__name__)
last_received_tags = []

# Etusivun GET
@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

# Tänne tullaan Zebran POSTilla
@app.route('/receive-tags', methods=['POST'])
def receive_tags():
    global last_received_tags
    try:
        if request.is_json:
            data = request.get_json()
        else:
            data = request.data.decode('utf-8')
        print("Received raw data:", data)

        if isinstance(data, dict) or isinstance(data, list):
            received = []
            if isinstance(data, dict):
                possible_list = data.get("tags")
                if isinstance(possible_list, list):
                    received = possible_list
                else:
                    received = [data]
            elif isinstance(data, list):
                received = data
            last_received_tags.extend(received)
            print("Parsed tags:", received)
            return jsonify({"status": "success", "received_count": len(received)}), 200
        else:
            last_received_tags.append({"raw_data": data})
            return jsonify({"status": "success", "info": "Data stored as raw string"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/get-tags', methods=['GET'])
def get_tags():
    global last_received_tags
    return jsonify(last_received_tags), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)