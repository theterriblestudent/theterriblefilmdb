function useCredits() {
    function getValues(values) {
        let stringConcatenatedValues;

        /*
         * This concatenates the directors/writers names and separates them using a commar
         */
        values.map((value, index) => {
            if (index === 0) {
                stringConcatenatedValues = `${value}`;
                return;
            };
            stringConcatenatedValues = `${stringConcatenatedValues}, ${value}`;
        })

        return stringConcatenatedValues;
    }

    return { getValues };
}

export default useCredits;
