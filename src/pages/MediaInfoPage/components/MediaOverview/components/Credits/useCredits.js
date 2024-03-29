function useCredits() {
    function getValues(values) {
        let stringConcatenatedValues;

        /*
         * This concatenates the directors/writers names and separates them using a commar
         */
        //eslint-disable-next-line
        values.map((value, index) => {
            if (index === 0) {
                stringConcatenatedValues = `${value}`;
                //eslint-disable-next-line
                return;
            };
            stringConcatenatedValues = `${stringConcatenatedValues}, ${value}`;
        })

        return stringConcatenatedValues;
    }

    return { getValues };
}

export default useCredits;
