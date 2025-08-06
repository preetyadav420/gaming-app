function Alert(props: any) {
  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      {props.message}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={props.onClick}
      ></button>
    </div>
  );
}

export default Alert;
