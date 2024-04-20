const initialState = {
	name: ""
};

export const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
  
      
      case "filters/changeFilter":     
       return {
        ...state,
        name: action.payload
        };
    
      default:
        return state;      
    }
};

export const changeFilter = (filterName) => {
	return {
		type: "filters/changeFilter",
		payload: filterName,
	};
};

export const selectFilters = (state) => state.filters.name;

// export const { changeFilter } = filtersSlice.actions;
// export const selectFilterName = (state) => state.filters.name;

// export default filtersSlice.reducer;