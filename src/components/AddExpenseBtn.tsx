function AddExpenseBtn() {
  return (
    <div>
      <a className="d-flex align-items-center">
        <button className="btn btn-primary d-inline w-1">
          <i className="bi bi-plus font-size-base"></i>
        </button>
        <h6 className="d-inline ms-3">Add expense</h6>
      </a>
    </div>
  );
}

export default AddExpenseBtn;
