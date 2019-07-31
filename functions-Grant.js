module.exports = {

    submitSearch: () => {
        let searchInfo = `depFrom=${state.from}&arriveTo=${state.to}&datePicked=${state.date}&seatAvailable=${state.passengers}`
        props.firstSearch(searchInfo)
    },

    onFocus: () => {
        setFocus('date')
    },

    handleClear: () => {
        props.clearSearch()
    }

    
}