
def extract_text_from_image(image_path: str):
    """
    Mock function to simulate OCR extraction.
    In a real implementation, this would use Tesseract or Google Vision API.
    """
    # Logic to maybe use pytesseract if installed, else mock
    # import pytesseract
    # return pytesseract.image_to_string(image_path)
    
    return {
        "raw_text": "ELECTRICITY BILL ... \n Consumed Units: 450 \n Amount: 3500.00",
        "structured_data": {
            "customer_name": "Jeswin Jones",
            "consumer_number": "123456789",
            "units_consumed": 450,
            "billing_date": "2025-11-30",
            "total_amount": 3500.00
        }
    }
