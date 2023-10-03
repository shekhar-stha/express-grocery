import { IconSearch } from '@tabler/icons-react';
const SearchComponent = (props) => {
  return (
    <div class="input-group">
      <input type="text" class={`form-control rounded-start-3 ps-4 py-3 ${props.inputClass}`} placeholder="Search for Products.."
        aria-label="Search for Products" aria-describedby="button-addon2" />
      <button class={`btn rounded-end-3 ${props.btnClass}`} type="button" id="button-addon2">
        <IconSearch />
      </button>
    </div>
  );
}

export default SearchComponent;
