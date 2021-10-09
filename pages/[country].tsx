import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowNarrowLeftIcon } from '@heroicons/react/solid';
import _ from 'lodash';

import Layout from 'components/Layout';
import DetailData from 'components/DetailData';

import { CountryType } from 'interfaces';

interface Props {
  data: CountryType;
}

const CountryDetail = ({ data }: Props) => {
  let currency = '';
  for (const key in data.currencies) {
    currency = data.currencies[key].name;
  }

  let languages = [];
  for (const key in data.languages) {
    languages.push(data.languages[key]);
  }

  return (
    <Layout>
      <div className="container mx-auto space-y-4 text-base p-7">
        <Link href="/">
          <a>
            <button className="flex items-center px-6 py-1 space-x-3 bg-white border rounded-md dark:bg-dark-blue dark:border-dark-blue shadow-average">
              <ArrowNarrowLeftIcon className="w-4 text-dark-gray" />
              <p>Back</p>
            </button>
          </a>
        </Link>
        <div className="flex flex-col md:gap-24 md:flex-row">
          <div className="relative w-full md:w-1/2 h-72 sm:h-80 md:h-[60vh]">
            <Image
              src={data.flags.png}
              layout="fill"
              objectFit="contain"
              quality={75}
              alt={data.name.common}
            />
          </div>
          <div className="w-full md:w-1/2 h-auto md:h-[60vh] flex flex-col justify-center p-6">
            <h1 className="mb-8 text-3xl font-bold">{data.name.common}</h1>
            <div className="flex flex-col gap-8 md:flex-row mb-14">
              <div className="space-y-1 md:flex-1">
                <DetailData keyTitle="Native Name">
                  {data.name.official}
                </DetailData>
                <DetailData keyTitle="Populations">
                  {data.population}
                </DetailData>
                <DetailData keyTitle="Region">{data.region}</DetailData>
                <DetailData keyTitle="Sub Region">{data.subregion}</DetailData>
                <DetailData keyTitle="Capital">{data.capital}</DetailData>
              </div>
              <div className="space-y-1 md:flex-1">
                <DetailData keyTitle="Top Level Domain">
                  {data.tld.join(', ')}
                </DetailData>
                <DetailData keyTitle="Currencies">{currency}</DetailData>
                <DetailData keyTitle="Languages">
                  {languages.join(', ')}
                </DetailData>
              </div>
            </div>
            <div className="w-full">
              <DetailData keyTitle="Border Countries">
                {data.borders?.map((country) => (
                  <Link href={`/${country}`} key={country}>
                    <a className="m-1 mt-0 mb-4">
                      <span className="px-6 py-1 bg-white border rounded-md cursor-pointer dark:bg-dark-blue dark:border-dark-blue shadow-average">
                        {country}
                      </span>
                    </a>
                  </Link>
                ))}
              </DetailData>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const [data] = await (
    await fetch(
      `https://restcountries.com/v3.1/alpha/${context.params.country}`
    )
  ).json();

  return {
    props: { data },
  };
};

export default CountryDetail;
