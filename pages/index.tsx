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
  const [filteredData, setFilteredData] = useState<CountryType[]>(data);

  const router = useRouter();

  const searchHandler = (input: string) => {
    setTimeout(() => {
      setFilteredData(
        data.filter((country) =>
          _.lowerCase(country.name.official).includes(input)
        )
      );
    }, 500);
  };

  const selectHandler = (input: string) => {
    router.push({ pathname: '/', query: { region: input } });
    setTimeout(() => {
      router.reload();
    }, 2000);
  };

  return (
    <Layout>
      <div className="container mx-auto text-sm p-7 text-very-dark-blue">
        <div className="flex flex-col items-start justify-between md:flex-row">
          <Search setData={searchHandler} />
          <ComboBox setRegion={selectHandler} region={region} />
        </div>
        <div className="flex flex-wrap gap-10 mx-auto w-one-column sm:w-two-columns lg:w-three-columns xl:w-four-columns 2xl:w-five-columns">
          {filteredData.map((country) => (
            <Country key={country.cca3} {...country} />
          ))}
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
