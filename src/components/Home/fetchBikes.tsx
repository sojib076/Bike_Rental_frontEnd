
export const fetchBikes = async (searchTerm:string) => {
    try {
        const response = await fetch(`http://localhost:5000/api/bikes?searchTerm=${encodeURIComponent(searchTerm)}`);
        if (!response.ok) {
            throw new Error('Failed to fetch bikes');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching bikes:', error);
        throw error; // Re-throw the error to be handled by the caller
    }
};
