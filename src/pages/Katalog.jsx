import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Link } from 'react-router-dom';
import { styles } from "../styles";
import Data from '/src/data/Data.js';

// ... (previous imports)

const Katalog = () => {
  const [brendFilter, setBrendFilter] = useState('');
  const [numberFilter, setNumberFilter] = useState('');
  const [kompanyFilter, setKompanyFilter] = useState('');
  const [ayollarFilter, setAyollarFilter] = useState('');
  const [davlatFilter, setDavlatFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  const handleBrendFilterChange = (event) => {
    setBrendFilter(event.target.value);
  };

  const handleNumberFilterChange = (event) => {
    setNumberFilter(event.target.value);
  };

  const handleKompanyFilterChange = (event) => {
    setKompanyFilter(event.target.value);
  };

  const handleAyollarFilterChange = (event) => {
    setAyollarFilter(event.target.value);
  };

  const handleDavlatFilterChange = (event) => {
    setDavlatFilter(event.target.value);
  };

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);
  };

  return (
    <div>
      <div className={`${styles.HeaderContainer}`}>
        <div className='flex justify-between'>
          <FormControl variant="outlined" className="my-4 w-[230px]">
            <InputLabel id="number-filter-label">Number</InputLabel>
            <Select
              labelId="number-filter-label"
              id="number-filter"
              value={numberFilter}
              onChange={handleNumberFilterChange}
              label="Number"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="933">933</MenuItem>
              <MenuItem value="4,703">4,703</MenuItem>
              {/* Add other Number options based on your data */}
            </Select>
          </FormControl>

          <FormControl variant="outlined" className="my-4 w-[230px]">
            <InputLabel id="kompany-filter-label">Kompany</InputLabel>
            <Select
              labelId="kompany-filter-label"
              id="kompany-filter"
              value={kompanyFilter}
              onChange={handleKompanyFilterChange}
              label="Kompany"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Versace">Versace</MenuItem>
              <MenuItem value="Omega">Omega</MenuItem>
              {/* Add other Kompany options based on your data */}
            </Select>
          </FormControl>

          <FormControl variant="outlined" className="my-4 w-[230px]">
            <InputLabel id="ayollar-filter-label">Ayollar</InputLabel>
            <Select
              labelId="ayollar-filter-label"
              id="ayollar-filter"
              value={ayollarFilter}
              onChange={handleAyollarFilterChange}
              label="Ayollar"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Ayollar">Ayollar</MenuItem>
              {/* Add other Ayollar options based on your data */}
            </Select>
          </FormControl>

          <FormControl variant="outlined" className="my-4 w-[230px]">
            <InputLabel id="davlat-filter-label">Davlat</InputLabel>
            <Select
              labelId="davlat-filter-label"
              id="davlat-filter"
              value={davlatFilter}
              onChange={handleDavlatFilterChange}
              label="Davlat"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Davlat">Davlat</MenuItem>
              {/* Add other Davlat options based on your data */}
            </Select>
          </FormControl>

          <FormControl variant="outlined" className="my-4 w-[230px]">
            <InputLabel id="name-filter-label">Name</InputLabel>
            <Select
              labelId="name-filter-label"
              id="name-filter"
              value={nameFilter}
              onChange={handleNameFilterChange}
              label="Name"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="V-Code 42mm">V-Code 42mm</MenuItem>
              {/* Add other Name options based on your data */}
            </Select>
          </FormControl>
        </div>

        <ul className='grid grid-cols-4 py-5'>
          {Data &&
            Data.length > 0 &&
            Data.filter((item) => {
              const brendCondition = brendFilter === '' || item.Brend === brendFilter;
              const numberCondition = numberFilter === '' || item.number === numberFilter;
              const kompanyCondition = kompanyFilter === '' || item.kompany === kompanyFilter;
              const ayollarCondition = ayollarFilter === '' || item.Ayollar === ayollarFilter;
              const davlatCondition = davlatFilter === '' || item.Davlat === davlatFilter;
              const nameCondition = nameFilter === '' || item.name === nameFilter;

              return brendCondition && numberCondition && kompanyCondition && ayollarCondition && davlatCondition && nameCondition;
            })
            .map((item, index) => {
              return (
                <li className='border p-4' key={index}>
                  <Link to={`/katalog/${item.id}`}>
                    <img src={item.icon} alt="rate" />
                    <img src={item.Image} className="h-[270px] w-[210px] p-5 ml-5" alt={item.kompany} />
                    <div className="flex justify-between items-center">
                      <p className="font-semibold">{item.kompany}</p>
                    </div>
                    <p className="text-gray-600 mb-2">{item.name}</p>
                    <p className="font-semibold">${item.number}</p>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Katalog;

