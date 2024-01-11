import Link from 'next/link';

const Breadcrumb = ({ routes } : any) => {
  return (
    <nav className="text-sm">
      <ol className="list-none p-0 inline-flex">
        {routes.map((route : any, index : any) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <svg
                className="fill-current w-3 h-3 mx-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M5 10l7-7m0 14l7-7m-7 7v-7"></path>
              </svg>
            )}
            {index === routes.length - 1 ? (
              <span>{route.name}</span>
            ) : (
              <Link href={route.path} className="text-blue-500">{route.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
