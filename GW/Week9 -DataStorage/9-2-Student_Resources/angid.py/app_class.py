from flask import Flask, jsonify
app = Flask(__name__)
hello_list = ["Hello", "World"]
hello_dict = {"Hello": "World"}

@app.route('/')
def home():
    return "Home page"
# doesnt return list
@app.route('/normal')
def normal():
    return jsonify(hello_list)
# return dict
@app.route('/dict')
def normal():
    return hello_dict


if __name__ == "__main__":

    app.run(debug = True)

