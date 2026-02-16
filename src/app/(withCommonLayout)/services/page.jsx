// app/services/page.jsx  (or wherever your route is)
import Container from '@/components/shared/Container';
import ServiceCard from './_components/ServiceCard';
import Filters from './_components/Filters'; // new client component

const getAllServices = async (searchParams) => {
  const params = new URLSearchParams(searchParams).toString();
  console.log('Fetching with params:', params);

  const res = await fetch(
    `https://car-washing-system-cleanify-server.vercel.app/api/v1/services?${params}`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    console.error('Fetch error:', res.status);
    return { data: [], meta: { total: 0 } };
  }

  const data = await res.json();
  return data;
};

export default async function Services({ searchParams }) {
  const sParams = await searchParams;
  const servicesList = await getAllServices(sParams);

  const hasResults = servicesList?.meta?.total > 0;

  return (
    <div className="py-8 md:py-12 bg-base-200/30 min-h-screen">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-base-content">
            Our Services
          </h1>

          <div className="badge badge-outline text-lg px-5 py-4">
            {servicesList?.meta?.total || 0} services available
          </div>
        </div>

        {/* Filters - Client Component */}
        <Filters initialParams={sParams} />

        {!hasResults ? (
          <div className="flex flex-col justify-center items-center min-h-[50vh] text-center mt-12">
            <div className="text-5xl mb-6">😕</div>
            <h2 className="text-3xl font-semibold mb-4">No Services Found</h2>
            <p className="text-lg text-base-content/70 mb-8 max-w-md">
              Try adjusting your filters or search terms
            </p>
            <button
              onClick={() => (window.location.href = '/services')}
              className="btn btn-primary btn-lg"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8">
            {servicesList?.data?.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}