// app/services/_components/Filters.jsx
'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback, useTransition } from 'react';
import { FaSearch, FaTimes, FaFilter } from 'react-icons/fa';

export default function Filters({ initialParams }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isPending, startTransition] = useTransition();

  // Helper to build new URL with updated params
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value === '' || value === null || value === undefined) {
        params.delete(name);
      } else {
        params.set(name, value);
      }

      return params.toString();
    },
    [searchParams]
  );

  const handleChange = (name, value) => {
    startTransition(() => {
      const query = createQueryString(name, value);
      router.push(`${pathname}?${query}`);
    });
  };

  //http://localhost:3000/services?priceRange=1000,2000
    const handlePriceChange = (name, value) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());
      let minPrice = params.get('minPrice') || '';
      let maxPrice = params.get('maxPrice') || '';
        if (name === 'minPrice') {
            minPrice = value;
        } else if (name === 'maxPrice') {
            maxPrice = value;
        }
        if (minPrice === '' && maxPrice === '') {
            params.delete('minPrice');
            params.delete('maxPrice');
        } else {
            params.set('minPrice', minPrice);
            params.set('maxPrice', maxPrice);
        }
        router.push(`${pathname}?${params.toString()}`);
    });
  };   
  
  const handleReset = () => {
    startTransition(() => {
      router.push(pathname);
    });
  };

  const currentSearch = searchParams.get('searchTerm') || '';
  const minPrice = searchParams.get('minPrice') || '';
  const maxPrice = searchParams.get('maxPrice') || '';
  const minDuration = searchParams.get('minDuration') || '';
  const maxDuration = searchParams.get('maxDuration') || '';
  const featured = searchParams.get('isFeatured') === 'true';
  const sort = searchParams.get('sort') || '';

  return (
    <div className="card bg-base-100 shadow-xl mb-10">
      <div className="card-body p-6 md:p-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Search Input */}
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text font-semibold">Search Services</span>
            </label>
            <div className="join w-full">
              <input
                type="text"
                placeholder="e.g. Wax, Polish, Interior..."
                className="input input-bordered join-item flex-1"
                value={currentSearch}
                onChange={(e) => handleChange('searchTerm', e.target.value)}
              />
              <button
                className="btn btn-primary join-item"
                onClick={() => handleChange('searchTerm', currentSearch)}
              >
                <FaSearch />
              </button>
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Sort By</span>
            </label>
            <select
              className="select select-bordered w-full"
              value={sort}
              onChange={(e) => handleChange('sort', e.target.value)}
            >
              <option value="">Default</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="duration_asc">Duration: Short to Long</option>
              <option value="duration_desc">Duration: Long to Short</option>
              <option value="featured">Featured First</option>
            </select>
          </div>
        </div>

        {/* Advanced Filters */}
        <div className="collapse collapse-arrow bg-base-200 mt-6">
          <input type="checkbox" defaultChecked={false} />
          <div className="collapse-title text-lg font-medium flex items-center gap-3">
            <FaFilter className="text-primary" /> Advanced Filters
          </div>
          <div className="collapse-content space-y-6 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Price Range */}
              <div>
                <label className="label">
                  <span className="label-text">Price Range (৳)</span>
                </label>
                <div className="flex gap-3">
                  <input
                    type="number"
                    placeholder="Min"
                    className="input input-bordered w-full"
                    value={minPrice}
                    onChange={(e) => handlePriceChange('minPrice', e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="input input-bordered w-full"
                    value={maxPrice}
                    onChange={(e) => handlePriceChange('maxPrice', e.target.value)}
                  />
                </div>
              </div>

              {/* Duration Range */}
              <div>
                <label className="label">
                  <span className="label-text">Duration (minutes)</span>
                </label>
                <div className="flex gap-3">
                  <input
                    type="number"
                    placeholder="Min"
                    className="input input-bordered w-full"
                    value={minDuration}
                    onChange={(e) => handleChange('minDuration', e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="input input-bordered w-full"
                    value={maxDuration}
                    onChange={(e) => handleChange('maxDuration', e.target.value)}
                  />
                </div>
              </div>

              {/* Featured Only */}
              <div className="flex items-end pb-3">
                <label className="label cursor-pointer gap-3">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    checked={featured}
                    onChange={(e) => handleChange('isFeatured', e.target.checked ? 'true' : null)}
                  />
                  <span className="label-text text-lg font-medium">Featured Only</span>
                </label>
              </div>
            </div>

            {/* Clear All */}
            <div className="flex justify-end mt-4">
              <button
                className="btn btn-ghost btn-sm gap-2"
                onClick={handleReset}
                disabled={isPending}
              >
                <FaTimes />
                Clear All Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}