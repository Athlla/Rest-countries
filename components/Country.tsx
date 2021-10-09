import Image from 'next/image';
import Link from 'next/link';
import _ from 'lodash';

import DetailData from './DetailData';
import { CountryType } from 'interfaces';

const Country = ({
  name,
  flags,
  population,
  region,
  capital,
  cca3,
}: CountryType) => {
  return (
    <Link href={`/${cca3}`}>
      <a>
        <div className="w-64 bg-white rounded-md cursor-pointer dark:bg-dark-blue shadow-average">
          <div className="relative overflow-hidden shadow-md rounded-t-md w-[256px] h-[128px] ">
            <Image
              src={flags.png}
              width={256}
              height={128}
              quality={50}
              objectFit="cover"
              alt={name.common}
            />
          </div>
          <div className="flex flex-col h-40 gap-2 p-4">
            <h3 className="mb-2 font-extrabold truncate 1-base">
              {name.common}
            </h3>
            <DetailData keyTitle="Population">{population}</DetailData>
            <DetailData keyTitle="Region">{region}</DetailData>
            <DetailData keyTitle="Capital">{capital}</DetailData>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Country;
