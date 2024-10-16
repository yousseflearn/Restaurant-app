import Image from 'next/image';
import Right from '../icons/Right';
export default function Hero() {
  return (
    <section className="hero">
      <div>
        <h1 className="text-4xl font-semibold">
          Everything <br /> is better <br />
          with our&nbsp;
          <span className="text-primary">foods</span>
        </h1>
        <p className="my-4 text-gray-500 text-sm">
          Food is the messing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
            Order now
            <Right />
          </button>
          <button className="flex gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>

      <div className="relative">
        <Image
          src={'/pizza.png'}
          alt={'pizza'}
          layout={'fill'}
          objectFit={'contain'}
        />
      </div>
    </section>
  );
}
