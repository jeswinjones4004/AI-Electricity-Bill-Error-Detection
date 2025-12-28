def analyze_bill_data(data):
    """
    Analyzes the structured bill data for errors and savings.
    """
    errors = []
    recommendations = []
    
    units = data.get("units_consumed", 0)
    amount = data.get("total_amount", 0.0)
    
    # tariff rule mock: >400 units should roughly be 7rs/unit approx + fixed charge
    expected_amount = units * 7.0 + 100 # Rough calculation
    
    if amount > expected_amount * 1.2:
        errors.append(f"Billing Discrepancy: Calculated amount is ~₹{expected_amount}, but billed ₹{amount}.")
    
    if units > 300:
        recommendations.append("High consumption detected. Consider switching high-wattage appliances to 5-star rated ones.")
        
    return {
        "errors": errors,
        "recommendations": recommendations,
        "confidence": 0.89
    }
