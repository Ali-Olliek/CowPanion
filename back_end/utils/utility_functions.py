import base64
import camelot
from io import BytesIO
from PyPDF2 import PdfFileReader, PdfFileWriter

# Function To Create B64 Format
def get_base64(image):
    buffered = BytesIO()
    image.save(buffered, format="JPEG")
    img_str = base64.b64encode(buffered.getvalue())
    return "data:image/jpeg;base64," + img_str.decode()


