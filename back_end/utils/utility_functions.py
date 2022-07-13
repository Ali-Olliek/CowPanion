import base64
from io import BytesIO
import tabula
import json 
import csv

# Function To Create B64 Format
def get_base64(image):
    buffered = BytesIO()
    image.save(buffered, format="JPEG")
    img_str = base64.b64encode(buffered.getvalue())
    return "data:image/jpeg;base64," + img_str.decode()

# turn csv to json
def convert_to_json(csvfile, jsonfile):

    data = []

    with open(csvfile, encoding='ISO 8859-1') as csvf:
        csvReader = csv.DictReader(csvf)

        for rows in csvReader:
            data.append(rows)
    
    with open(jsonfile, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data))

# scrape pdf tables 
def scrape_data():
    file = "C:/Users/Ollie/Desktop/feeds.pdf"
    tabula.read_pdf(file, pages=92)
    tabula.convert_into(file, "utils/feeds.csv", pages="92-100", output_format="csv", stream=True)

    csvfile = 'utils/feeds.csv'
    jsonfile = 'utils/feeds.json'

    convert_to_json(csvfile, jsonfile)

scrape_data()