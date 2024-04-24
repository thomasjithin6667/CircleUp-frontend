import React, { createContext, useState, useContext } from 'react';

// Define the type for the filter data
interface FilterData {
  search:string|null
  jobRole: string | null;
  location: string | null;
  jobType: string | null;
  salaryRange: string | null;
  experienceRange: string | null;
}

// Define the type for the context value
interface FilterContextValue {
  filterData: FilterData;
  setFilterData: React.Dispatch<React.SetStateAction<FilterData>>;
}

// Create the context with an initial empty object as the default value
const FilterContext = createContext<FilterContextValue | undefined>(undefined);

// Create a custom hook to consume the context
const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilterContext must be used within a FilterProvider');
  }
  return context;
};

// FilterProvider component using useState for filterData
const FilterProvider: React.FC = ({ children }) => {
  const [filterData, setFilterData] = useState<FilterData>({
    search:null,
    jobRole: null,
    location: null,
    jobType: null,
    salaryRange: null,
    experienceRange: null,
  });

  return (
    <FilterContext.Provider value={{ filterData, setFilterData }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, useFilterContext, FilterProvider };