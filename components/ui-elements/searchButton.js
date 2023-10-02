const SearchComponent = () => {
  return (
    <div class="input-group">
      <input type="text" class="form-control rounded-start-3 ps-4 py-3" placeholder="Search for Products.."
        aria-label="Search for Products" aria-describedby="button-addon2" />
      <button class="btn btn-secondary rounded-end-3" type="button" id="button-addon2"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
  );
}

export default SearchComponent;
