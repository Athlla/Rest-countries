import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import _ from 'lodash';

import Country from 'components/Country';
import Layout from 'components/Layout';
import { CountryType } from 'interfaces';
import Search from 'components/Search';
import { useState } from 'react';
import ComboBox from 'components/ComboBox';

interface Props {
  data: CountryType[];
  region: string;
}

const Home = ({ data, region }: Props) => {
  const [filteredData, setFilteredData] = useState<string>('');

  const router = useRouter();

  const searchHandler = (input: string) => {
    setFilteredData(input);
  };

  const selectHandler = (input: string) => {
    setFilteredData('');
    router.push({ pathname: '/', query: { region: input } });
  };

  const renderedData =
    filteredData === ''
      ? data
      : data.filter((country) =>
          _.lowerCase(country.name.official).includes(filteredData)
        );

  return (
    <Layout>
      <div className="container mx-auto text-sm p-7 text-very-dark-blue">
        <div className="flex flex-col items-start justify-between md:flex-row">
          <Search setData={searchHandler} searchValue={filteredData} />
          <ComboBox setRegion={selectHandler} region={region} />
        </div>
        <div className="flex flex-wrap gap-10 mx-auto w-one-column sm:w-two-columns lg:w-three-columns xl:w-four-columns 2xl:w-five-columns">
          {renderedData.length > 0 ? (
            renderedData.map((country) => (
              <Country key={country.cca3} {...country} />
            ))
          ) : (
            <p>No Country found...</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let url = 'https://restcountries.com/v3.1/all';
  let region = '';

  if (query?.region) {
    url = `https://restcountries.com/v3.1/region/${query.region}`;
    region = query.region as string;
  }

  const data = await (await fetch(url)).json();

  return {
    props: { data, region },
  };
};

export default Home;
