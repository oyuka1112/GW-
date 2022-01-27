from flask import Flask, render_template
from flask_pymongo import PyMongo
import scrape
app = Flask(__name__)

# @app.route('/')
# def index():
#     items_list = ["Oyuka", "Oyuka1", "Oyuka2"]
#     dict = {"name": "Oyuka", "age":"21"}
#     return render_template('index.html', items_list = items_list, player_dict = dict)

# if __name__ == "__main__":
#     app.run(debug = True)

# mongo = PyMongo(app, url = "mongodb://localhost:")
app.config["MONGO_URI" = "mongodb://localhost:" ]
mongo = PyMongo(app)
@app.route("/")
def index():
    listings = mongo.db.anyname.find_one()
    return render_template("index.html", listings = listings)

@app.route("/scrape")
def scraper():
    listings = mongo.db.listings
    listings_data = scrape.scrape()
    listings.update({}, listings_data, upsert = True)
    return "Scraping complete"
    