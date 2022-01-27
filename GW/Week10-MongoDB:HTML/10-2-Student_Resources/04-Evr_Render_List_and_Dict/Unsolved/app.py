# import necessary libraries
from flask import Flask, render_template

# @TODO: Initialize your Flask app here
# CODE GOES HERE
app = Flask(__name__)
# @TODO: Create a list of dictionaries
# CODE GOES HERE
animal_list = [{"name": "Fido", "type": "Lab"},
{"name": "Dog1", "type": "L1"},
{"name": "Fido2", "type": "Lab2"},
{"name": "Fido3", "type": "Lab3"}]
# @TODO:  Create a route and view function that takes in a dictionary and renders index.html template
# CODE GOES HERE
@app.route('/')
def index():
    return render_template("index.html", animals = animal_list)
if __name__ == "__main__":
    app.run(debug=True)
