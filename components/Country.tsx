import Image from 'next/image';

import { CountryType } from 'interfaces';

const Country = ({ name, flags, population, region, capital }: CountryType) => {
  return (
    <div className='w-64 bg-white rounded-md cursor-pointer shadow-average'>
      <div className='relative overflow-hidden shadow-md rounded-t-md w-[256px] h-[128px]'>
        <Image
          src={flags.png}
          width={256}
          height={128}
          quality={50}
          objectFit='cover'
          alt={name.common}
        />
      </div>
      <div className='flex flex-col h-40 gap-2 p-4 detail'>
        <h3 className='mb-2 font-extrabold truncate 1-base'>{name.common}</h3>
        <p>
          <span className='font-semibold'>Population:</span>{' '}
          {Intl.NumberFormat('id-ID').format(population)}
        </p>
        <p>
          <span className='font-semibold'>Region:</span> {region}
        </p>
        <p>
          <span className='font-semibold'>Capital:</span> {capital}
        </p>
      </div>
    </div>
  );
};

export default Country;
