class GSTService {
    // Method to calculate CGST
    static calculateCGST(amount: number, rate: number): number {
        return (amount * rate) / 100;
    }

    // Method to calculate SGST
    static calculateSGST(amount: number, rate: number): number {
        return (amount * rate) / 100;
    }

    // Method to calculate IGST
    static calculateIGST(amount: number, rate: number): number {
        return (amount * rate) / 100;
    }
}

export default GSTService;