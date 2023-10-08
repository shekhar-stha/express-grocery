import { IconSearch } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import { useState } from 'react';

const SearchComponent = (props) => {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    if (query.trim() !== '') {
      router.push(`/search/${encodeURIComponent(query)}`);
    }
  };
  return (
    <form onSubmit={handleSearch}>
      <div class="input-group">
        <input
          type="text"
          class={`form-control rounded-start-3 ps-4 py-3 ${props.inputClass}`}
          placeholder="Search for Products.."
          aria-label="Search for Products" aria-describedby="button-addon2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button class={`btn rounded-end-3 ${props.btnClass}`} type="submit" id="button-addon2">
          <IconSearch />
        </button>
      </div>
    </form>
  );
}

export default SearchComponent;
