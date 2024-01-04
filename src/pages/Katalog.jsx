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
              <MenuItem value="4,446">4,446</MenuItem>
              <MenuItem value="19,159">19,159</MenuItem>
              <MenuItem value="20,273">20,273</MenuItem>
              <MenuItem value="17,429">17,429</MenuItem>
              <MenuItem value="5,541">5,541</MenuItem>
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
              <MenuItem value="AUDEMARS PIGUET">AUDEMARS PIGUET</MenuItem>
              <MenuItem value="Maurice Lacroix">Maurice Lacroix</MenuItem>
              <MenuItem value="Locman Italy">Locman Italy</MenuItem>
              {/* Add other Kompany options based on your data */}
            </Select>
          </FormControl>

          <FormControl variant="outlined" className="my-4 w-[230px]">
            <InputLabel id="ayollar-filter-label">Erkaklar</InputLabel>
            <Select
              labelId="ayollar-filter-label"
              id="ayollar-filter"
              value={ayollarFilter}
              onChange={handleAyollarFilterChange}
              label="Ayollar"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Ayollar">Erkaklar</MenuItem>
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
              <MenuItem value="Davlat">Amerika</MenuItem>
              <MenuItem value="Davlat">Canada</MenuItem>
              <MenuItem value="Davlat">Meksika</MenuItem>
              <MenuItem value="Davlat">Dubai</MenuItem>
              <MenuItem value="Davlat">Turkiya</MenuItem>
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
              <MenuItem value="2023 unworn Datejust 41mm">2023 unworn Datejust 41mm</MenuItem>
              <MenuItem value="Royal Oak">Royal Oak</MenuItem>
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

