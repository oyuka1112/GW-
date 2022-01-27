from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return "Hello World"
@app.route('/about')
def about():
    return "About page"
    
## To deploy it in the page
if __name__ == "__main__":

    app.run(debug = True)

