import csv
import json
import tabula
import base64
from io import BytesIO
from django.core.serializers import serialize

# Function To Create B64 Format


class Utilities:
    def __init__(self) -> None:
        pass

    def get_base64(self, image):
        buffered = BytesIO()
        image.save(buffered, format="JPEG")
        img_str = base64.b64encode(buffered.getvalue())
        return "data:image/jpeg;base64," + img_str.decode()

    # turn csv to json

    def convert_to_json(self, csvfile, jsonfile):

        data = []

        with open(csvfile, 'r', encoding='ISO 8859-1') as csvf:
            csvReader = csv.DictReader(csvf)

            for rows in csvReader:
                data.append(rows)

        with open(jsonfile, 'w', encoding='utf-8') as jsonf:
            jsonf.write(json.dumps(data))

    # scrape pdf tables
    file = "C:/Users/Ollie/Desktop/feeds.pdf"  # directory of the pdf file

    def scrape_data(file):
        tabula.read_pdf(file, pages=92)  # Pages to read
        tabula.convert_into(file, "utils/feeds.csv", pages="92-100",
                            output_format="csv", stream=True)  # pages to convert

        csvfile = 'utils/feeds.csv'
        jsonfile = 'utils/feeds.json'

        Utilities.convert_to_json(csvfile, jsonfile)

    # To populate the
    # Json file we will
    # invoke the function
    # through an Admin API

    # serialize Json

    def object_to_json(self, object):
        to_json = serialize("json", object)
        feeds_json = json.loads(to_json)

        return feeds_json
