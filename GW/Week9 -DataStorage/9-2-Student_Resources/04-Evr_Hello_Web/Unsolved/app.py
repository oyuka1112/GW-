# 1. Import Flask
from flask import Flask

# 2. Create an app
app = Flask(__name__)

# 3. Define index route
@app.route('/')
def home_page():
    return "This is a home page"

dict = {"name":"Oyuka", "where":"VA"}
# 4. Define the about route
@app.route('/about')
def about():
    return dict

contact_dict = {"Phone": "123456789", "email": "oyuka@gmail.com"}
# 5. Define the contact route
@app.route('/contact')
def contact():
    return contact_dict

# 6. Define main behavior
if __name__ == "__main__":
    app.run(debug = True)